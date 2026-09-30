#include "economy/ExchequerService.hpp"
namespace pk {
Wallet ExchequerService::wallet(std::uint64_t user){
 auto& c=db_.connection(); pqxx::work tx(c);
 auto cur=tx.exec1("SELECT id,code,symbol FROM currencies WHERE code='KINGDOM_COIN' AND status='ACTIVE'");
 tx.exec("INSERT INTO wallets(user_id,currency_id) VALUES("+tx.quote(user)+","+tx.quote(cur[0].as<std::int64_t>())+") ON CONFLICT DO NOTHING");
 auto r=tx.exec1("SELECT w.id,w.user_id,w.balance,c.code,c.symbol,w.status FROM wallets w JOIN currencies c ON c.id=w.currency_id WHERE w.user_id="+tx.quote(user)+" AND c.code='KINGDOM_COIN'");
 tx.commit();
 return {r[0].as<std::int64_t>(),r[1].as<std::int64_t>(),r[2].as<std::int64_t>(),r[3].as<std::string>(),r[4].as<std::string>(),r[5].as<std::string>()};
}
std::vector<Entry> ExchequerService::ledger(std::uint64_t user,std::size_t limit){
 auto& c=db_.connection(); pqxx::read_transaction tx(c);
 auto rows=tx.exec("SELECT l.entry_type,l.amount,l.source,COALESCE(l.description,''),l.balance_after,to_char(l.created_at AT TIME ZONE 'UTC','YYYY-MM-DD HH24:MI') FROM ledger_entries l JOIN wallets w ON w.id=l.wallet_id WHERE w.user_id="+tx.quote(user)+" ORDER BY l.created_at DESC LIMIT "+tx.quote((int)limit));
 std::vector<Entry> out; for(auto&r:rows) out.push_back({r[0].as<std::string>(),r[2].as<std::string>(),r[3].as<std::string>(),r[5].as<std::string>(),r[1].as<std::int64_t>(),r[4].as<std::int64_t>()}); return out;
}
std::string ExchequerService::economy_status(){
 pqxx::read_transaction tx(db_.connection());
 return tx.exec1("SELECT economy_status FROM economic_config WHERE id=1")[0].as<std::string>();
}}
