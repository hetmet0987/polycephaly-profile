#include <dpp/dpp.h>
#include "config/Config.hpp"
#include "database/Database.hpp"
#include "economy/ExchequerService.hpp"
#include "i18n/LocaleManager.hpp"
#include "ai/GroqClient.hpp"
#include "ai/AIAdvisor.hpp"
#include "ui/PanelRenderer.hpp"
#include "ui/PanelRouter.hpp"
#include <iostream>
int main(){
 try{
  auto c=pk::Config::from_environment();pk::Database db(c.database_url);pk::ExchequerService ex(db);
  pk::LocaleManager i18n(db,c.locale_dir);i18n.load();pk::GroqClient g(c.groq_api_key,c.groq_model);
  pk::AIAdvisor ai(g,ex);pk::PanelRenderer r(ex,i18n);pk::PanelRouter router(r,i18n,ai);dpp::cluster bot(c.discord_token);
  bot.on_log(dpp::utility::cout_logger());
  bot.on_ready([&bot](const dpp::ready_t&){if(dpp::run_once<struct reg>())bot.global_bulk_command_create({
   dpp::slashcommand("exchequer","Open Prime Exchequer",bot.me.id),
   dpp::slashcommand("wallet","Open your wallet",bot.me.id),
   dpp::slashcommand("ledger","Open your ledger",bot.me.id),
   dpp::slashcommand("market","Open the market",bot.me.id),
   dpp::slashcommand("rewards","Open rewards",bot.me.id),
   dpp::slashcommand("games","Open games",bot.me.id)});});
  bot.on_slashcommand([&](const dpp::slashcommand_t&e){auto n=e.command.get_command_name();pk::Page p=pk::Page::HOME;if(n=="wallet")p=pk::Page::WALLET;else if(n=="ledger")p=pk::Page::LEDGER;else if(n=="market")p=pk::Page::MARKET;else if(n=="rewards")p=pk::Page::REWARDS;else if(n=="games")p=pk::Page::GAMES;e.reply(r.render(p,e.command.usr.id));});
  bot.on_button_click([&](const dpp::button_click_t&e){router.handle(e);});
  bot.start(dpp::st_wait);
 }catch(const std::exception&e){std::cerr<<"Fatal: "<<e.what()<<'\\n';return 1;}
}
