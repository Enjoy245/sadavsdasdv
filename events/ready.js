const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[BOT] | İşlemler tamam bot haızr.`);
  console.log(`[BOT] | (${client.user.username}) Hazırlandı Iyı Sanslar !
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("online");
  client.user.setActivity("STRIGA #CODE", { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`CODER ABIN`);

};
