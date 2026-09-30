#include "ai/AIAdvisor.hpp"
namespace pk {
std::future<std::string> AIAdvisor::analyze(std::uint64_t u,Locale l){
 auto w=ex_.wallet(u); auto es=ex_.ledger(u);
 std::string data="Locale="+code(l)+"; balance="+std::to_string(w.balance)+" "+w.symbol+"; ledger_count="+std::to_string(es.size());
 std::string sys="You are Prime Exchequer AI Advisor. Read-only. Never modify or instruct modification of balances. Do not invent missing financial facts. Reply in "+code(l)+".";
 return ai_.chat(sys,"Give a concise economic overview using only: "+data);
}}
