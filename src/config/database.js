module.exports = {
    dialect : 'mariadb',
    host : 'webbetim202001.mysql.dbaas.com.br',
    username : 'webbetim202001',
    password : 'betim202001',
    database : 'webbetim202001',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    },
    define : {
        timestamps : true,
        underscored : true,
        underscoredAll : true,
    }
};