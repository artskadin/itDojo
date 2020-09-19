import { Container } from "./frameworkCore/container.class";
import { ConfigService } from "frameworkCore/services/config/config.service";
import { Telegraf, session } from 'telegraf'


const bootApp = async function () {
  const AppContainer = new Container()
  // Сайд-Эффекты
  await AppContainer.init({
    services: [ConfigService]
  });

  const configService: ConfigService = AppContainer.getService(ConfigService);
  const telegrafToken = configService.config.get('botToken');

  const bot = new Telegraf(telegrafToken)
  bot.start(async (ctx) => {
    await ctx.reply("testwelcome message")
    await ctx.reply("hehmda");
  });
  bot.launch().then(() => {
    console.log('Бот запущен');
  });
};
bootApp();
