import { Container } from "frameworkCore/container.class";

async function boot() {
    const AppContainer = new Container();
    await AppContainer.init({});
    await AppContainer.getDbService.syncSchema();

  }
  boot().then(() => {
    console.info("Синхронизация схемы entity и вашей базы данных завершена");
    process.exit(0);
  });