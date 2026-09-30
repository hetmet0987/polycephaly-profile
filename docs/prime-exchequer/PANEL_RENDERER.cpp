#include "ui/PanelRenderer.hpp"
#include <sstream>
namespace pk {
dpp::component PanelRenderer::btn(std::string l,std::string id,dpp::component_style s){return dpp::component().set_type(dpp::cot_button).set_style(s).set_label(l).set_id(id);}
dpp::message PanelRenderer::render(Page p,std::uint64_t u){
 auto w=e_.wallet(u);auto es=e_.ledger(u);auto l=i_.get(u);auto T=[&](const std::string&k){return i_.t(l,k);};
 std::ostringstream x;
 if(p==Page::HOME)x<<"╔══════════════════════════════════════════╗\\n║           👑 PRIME EXCHEQUER            ║\\n║        ROYAL FINANCIAL OFFICE           ║\\n╠══════════════════════════════════════════╣\\n║ 💰 "<<T("wallet.balance")<<": "<<w.balance<<" "<<w.symbol<<"\\n║ 🟢 "<<T("economy.status")<<": "<<e_.economy_status()<<"\\n╚══════════════════════════════════════════╝";
 else if(p==Page::WALLET)x<<"💰 "<<T("wallet.title")<<"\\n\\n💰 "<<T("wallet.balance")<<": "<<w.balance<<" "<<w.symbol<<"\\n🟢 "<<T("wallet.status")<<": "<<w.status<<"\\n\\n⚠️ "<<T("wallet.transfer_e5");
 else if(p==Page::LEDGER){x<<"📜 "<<T("ledger.title")<<"\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n";if(es.empty())x<<T("ledger.empty");for(auto&e:es)x<<(e.type=="CREDIT"?"🟢 ":"🔴 ")<<e.amount<<" "<<w.symbol<<" · "<<e.source<<"\\n   "<<e.description<<" · "<<e.created<<"\\n";x<<"\\nBalance: "<<w.balance<<" "<<w.symbol;}
 else if(p==Page::MARKET)x<<"🛒 "<<T("market.title")<<"\\n\\n"<<T("market.marketplace")<<"\\n"<<T("market.catalog")<<"\\n"<<T("market.buy_sell")<<"\\n"<<T("market.dynamic_pricing")<<"\\n\\n🔒 COMMERCE — E4";
 else if(p==Page::REWARDS)x<<"🎁 "<<T("rewards.title")<<"\\n\\n"<<T("rewards.daily")<<"\\n"<<T("rewards.achievement")<<"\\n"<<T("rewards.activity")<<"\\n"<<T("rewards.event")<<"\\n"<<T("rewards.loyalty");
 else if(p==Page::GAMES)x<<"🎰 EXCHEQUER GAMES\\n\\n💰 "<<w.balance<<" "<<w.symbol<<"\\n\\n🎲 Dice — 🔒 E7\\n🃏 Blackjack — 🔒 E7\\n🎰 Slots — 🔒 E7\\n\\n⚠️ Virtual currency only.";
 else if(p==Page::LANGUAGE)x<<"🌐 LANGUAGE\\n\\n🇻🇳 vi-VN\\n🇺🇸 en-US\\n🇨🇳 zh-CN\\n🇯🇵 ja-JP\\n🇰🇷 ko-KR\\n🇫🇷 fr-FR\\n🇩🇪 de-DE\\n🇪🇸 es-ES";
 else x<<"🤖 PRIME EXCHEQUER AI ADVISOR\\n\\nRead-only economic analysis.";
 dpp::message m;m.set_content(x.str());
 if (p == Page::LANGUAGE) {
   dpp::component a;
   a.add_component(btn("🇻🇳 Tiếng Việt","exchequer:lang:vi"));
   a.add_component(btn("🇺🇸 English","exchequer:lang:en"));
   a.add_component(btn("🇨🇳 中文","exchequer:lang:zh"));
   a.add_component(btn("🇯🇵 日本語","exchequer:lang:ja"));
   dpp::component b;
   b.add_component(btn("🇰🇷 한국어","exchequer:lang:ko"));
   b.add_component(btn("🇫🇷 Français","exchequer:lang:fr"));
   b.add_component(btn("🇩🇪 Deutsch","exchequer:lang:de"));
   b.add_component(btn("🇪🇸 Español","exchequer:lang:es"));
   dpp::component c;
   c.add_component(btn("🏠 Home","exchequer:home",dpp::cos_primary));
   return m.add_component(a).add_component(b).add_component(c);
 }
 dpp::component a;a.add_component(btn("💰 Wallet","exchequer:wallet",dpp::cos_primary));a.add_component(btn("📜 Ledger","exchequer:ledger"));a.add_component(btn("🛒 Market","exchequer:market"));a.add_component(btn("🎁 Rewards","exchequer:rewards"));a.add_component(btn("🎰 Games","exchequer:games"));
 dpp::component b;b.add_component(btn("🤖 AI","exchequer:ai"));b.add_component(btn("🌐 Language","exchequer:language"));if(p!=Page::HOME)b.add_component(btn("🏠 Home","exchequer:home"));
 return m.add_component(a).add_component(b);
}}
