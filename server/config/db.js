require('dotenv').config();
// Obtenga el servicio mysql
var mysql = require('mysql');
const axios = require('axios');
const Sequelize = require('sequelize');

module.exports = class Db {

    instance = null;

    constructor() {
        (async () => {
            this.instance = new Sequelize(process.env.SQL_DB, process.env.SQL_USERNAME, process.env.SQL_PASS, {
                host: process.env.SQL_SERVER,
                dialect: 'mysql',
            });

            await this.connect();
        })()
    }

    async connect() {
        try {
            await this.instance.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    async getPlayers(page) {
        const { data } = await axios.get('https://www.easports.com/fifa/ultimate-team/api/fut/item', {
            params: {
                page
            }
        });

        const gamesFormated = data.items.map((item) => ([
            item.baseId,
            item.name,
            item.position,
            item.nation.name,
            item.club.name
        ]));
        return gamesFormated;
    }

    async getPlayerLoop(callback = async () => undefined) {
        const { data } = await axios.get('https://www.easports.com/fifa/ultimate-team/api/fut/item');
        let currentPage = 1;
        while (currentPage <= data.totalPages) {
            const players = await this.getPlayers(currentPage);
            callback(players);
            currentPage++;
        }
    }



    async playerSeeder() {
        await this.getPlayerLoop((players = []) => {

            var sql = "INSERT INTO players (id, name, position, country, team) VALUES ?";


            this.instance.query(sql, [players], function (err) {
                if (err) throw err;

            });
        });
    }

    async playerAll() {
        return new Promise((resolve, reject) => {
            this.instance.query('SELECT * from players LIMIT 10', function (err, results) {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    reject(err);
                }
                resolve({ message: 'Registros de jugadores', results });
            });
        });
    }

    async playerByName(options = { search: '', order: 'asc', page: 1 }) {
        return new Promise((resolve, reject) => {
            var sql = `SELECT * FROM players WHERE name LIKE N'%${options.search}%' ORDER BY name ${options.order}`;
            this.instance.query(sql, function (err, results) {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    reject(err);
                }
                resolve({ message: 'Jugador encontrado', results });
            });
        });
    }

    async playerByTeam(team = '') {
        return new Promise((resolve, reject) => {
            var sql = `SELECT * FROM players WHERE team LIKE N'%${team}%'`;
            this.instance.query(sql, function (err, results) {
                if (err) {
                    console.log("An error ocurred performing the query.");
                    reject(err);
                }
                resolve({ message: 'Jugadores encontrados en el equipo', results });
            });
        });
    }

}