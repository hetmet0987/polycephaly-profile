# Prime Seneschal S10.10 — Channel-Aware Canonical Permission Memory

Source architecture: `prime_kingdom_channel_map__20260913_094913.json`.

## Design rule

Category visibility is authoritative. Channels inherit their category unless the channel's function clearly requires a different audience or write policy.

- Categories: 25
- Channels: 115
- Category-synchronized channels: 89
- Explicit channel exceptions: 26

## Category base policies

- **╰┈➤ 『 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 ・ 𝐆𝐀𝐓𝐄 』 🔐** — `VERIFICATION_GATE` — view `@everyone` — chat `read-only`
- **╰┈➤『 𝐂𝐀𝐏𝐈𝐓𝐀𝐋 𝐇𝐀𝐋𝐋 』👑** — `CAPITAL_HALL_PUBLIC` — view `PUBLIC_VERIFIED` — chat `SOVEREIGN, ADMIN_STAFF, PRESS`
- **╰┈➤ 『 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘 ・ 𝐇𝐔𝐁 』 💬** — `COMMUNITY_HUB` — view `PUBLIC_VERIFIED` — chat `PUBLIC_VERIFIED`
- **╰┈➤ 『 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘 ・ 𝐅𝐎𝐑𝐔𝐌𝐒 』🗯️** — `COMMUNITY_FORUMS` — view `PUBLIC_VERIFIED` — chat `PUBLIC_VERIFIED`
- **╰┈➤ 『 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 ・ 𝐂𝐄𝐍𝐓𝐄𝐑 』  📚** — `SUPPORT_CENTER` — view `PUBLIC_VERIFIED, SUPPORT` — chat `SUPPORT`
- **╰┈➤ 『 𝐀𝐋𝐋𝐈𝐀𝐍𝐂𝐄 ・ 𝐇𝐔𝐁 』🤝** — `ALLIANCE_HUB_PRIVATE` — view `ALLIANCE_INTERNAL` — chat `ALLIANCE_INTERNAL`
- **╰┈➤ 『 𝐖𝐀𝐑 ・ 𝐑𝐎𝐎𝐌 』 ⚔️** — `WAR_ROOM_PRIVATE` — view `DEFENCE_ALL` — chat `DEFENCE_ALL`
- **╰┈➤ 『 𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ・ 𝐀𝐋𝐋𝐈𝐀𝐍𝐂𝐄𝐒 』** — `KINGDOM_ALLIANCES_PUBLIC_INFO` — view `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN` — chat `FOREIGN_AFFAIRS, SOVEREIGN`
- **╰┈➤ 『 𝐏𝐑𝐈𝐌𝐄 ・ 𝐍𝐄𝐓𝐖𝐎𝐑𝐊 』** — `PRIME_NETWORK_PUBLIC_INFO` — view `PUBLIC_VERIFIED, STAFF_ALL` — chat `STAFF_ALL`
- **╰┈➤ 『 𝐄𝐕𝐄𝐍𝐓 ・ 𝐒𝐘𝐒𝐓𝐄𝐌 』 🏆** — `EVENT_SYSTEM_PUBLIC_INFO` — view `PUBLIC_VERIFIED, EVENT_STAFF` — chat `EVENT_STAFF`
- **╰┈➤ 『 𝐕𝐎𝐈𝐂𝐄 ・ 𝐇𝐔𝐁 』 🎧** — `VOICE_HUB` — view `PUBLIC_VERIFIED, DEFENCE_ALL` — chat `PUBLIC_VERIFIED, DEFENCE_ALL`
- **╰┈➤ 『 𝐁𝐎𝐎𝐒𝐓𝐄𝐑 ・ 𝐋𝐎𝐔𝐍𝐆𝐄 』💎** — `BOOSTER_LOUNGE` — view `SUPPORTERS, SOVEREIGN` — chat `SUPPORTERS, SOVEREIGN`
- **╰┈➤ 『 𝐂𝐇𝐀𝐍𝐂𝐄𝐋𝐋𝐎𝐑 ・ 𝐎𝐅𝐅𝐈𝐂𝐄 』 👑** — `CHANCELLOR_OFFICE_PRIVATE` — view `GOVERNMENT` — chat `GOVERNMENT`
- **╰┈➤ 『 𝐂𝐀𝐁𝐈𝐍𝐄𝐓 ・ 𝐎𝐅𝐅𝐈𝐂𝐄 』 🏛️** — `CABINET_OFFICE_PRIVATE` — view `GOVERNMENT` — chat `GOVERNMENT`
- **╰┈➤ 『 𝐂𝐈𝐓𝐈𝐙𝐄𝐍 ・ 𝐄𝐍𝐓𝐑𝐘 』 🔐** — `CITIZEN_ENTRY_STAFF` — view `SOVEREIGN, ADMIN_STAFF` — chat `SOVEREIGN, ADMIN_STAFF`
- **╰┈➤ 『 𝐑𝐎𝐘𝐀𝐋 ・ 𝐀𝐔𝐃𝐈𝐓 』 📜** — `ROYAL_AUDIT_READ_ONLY` — view `AUDIT` — chat `SOVEREIGN`
- **╰┈➤ 『 𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ・ 𝐈𝐍𝐓𝐄𝐋𝐋𝐈𝐆𝐄𝐍𝐂𝐄 』 📊** — `KINGDOM_INTELLIGENCE_PRIVATE` — view `INTELLIGENCE` — chat `SOVEREIGN, ADMIN_STAFF`
- **╰┈➤ 『 𝐑𝐎𝐘𝐀𝐋 ・ 𝐑𝐄𝐂𝐎𝐑𝐃𝐒 』 🗃️** — `ROYAL_RECORDS_PRIVATE` — view `GOVERNMENT, JUDICIARY` — chat `SOVEREIGN, ADMIN_STAFF`
- **╰┈➤ 『 𝐒𝐓𝐀𝐅𝐅 ・ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 』 🛡️** — `STAFF_COMMAND_PRIVATE` — view `STAFF_ALL` — chat `STAFF_ALL`
- **╰┈➤ 『 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘 ・ 𝐑𝐄𝐂𝐑𝐔𝐈𝐓𝐌𝐄𝐍𝐓 』 🎮** — `COMMUNITY_RECRUITMENT_PUBLIC` — view `PUBLIC_VERIFIED, RECRUITMENT` — chat `RECRUITMENT`
- **╰┈➤ 『🤝𝐄𝐦𝐛𝐚𝐬𝐬𝐲』** — `EMBASSY_PUBLIC_INFO` — view `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN` — chat `FOREIGN_AFFAIRS, SOVEREIGN`
- **╭┈➤ 『 ⚖️ 𝐒𝐔𝐏𝐑𝐄𝐌𝐄・𝐂𝐎𝐔𝐑𝐓 』** — `SUPREME_COURT_PRIVATE` — view `JUDICIARY, SOVEREIGN` — chat `JUDICIARY, SOVEREIGN`
- **╭┈➤ 『 🏛️ 𝐉𝐔𝐃𝐈𝐂𝐈𝐀𝐋・𝐂𝐇𝐀𝐌𝐁𝐄𝐑𝐒 』** — `JUDICIAL_CHAMBERS_PRIVATE` — view `JUDICIARY, SOVEREIGN` — chat `JUDICIARY, SOVEREIGN`
- **╭┈➤ 『 👑 𝐂𝐑𝐎𝐖𝐍・𝐏𝐑𝐎𝐒𝐄𝐂𝐔𝐓𝐈𝐎𝐍 』** — `CROWN_PROSECUTION_PRIVATE` — view `PROSECUTION, SOVEREIGN` — chat `PROSECUTION, SOVEREIGN`
- **╭┈➤ 『 🛡️ 𝐃𝐄𝐅𝐄𝐍𝐂𝐄・&・𝐇𝐄𝐀𝐑𝐈𝐍𝐆𝐒 』** — `DEFENCE_HEARINGS_PRIVATE` — view `DEFENCE_COUNSEL, JUDICIARY, SOVEREIGN` — chat `DEFENCE_COUNSEL, JUDICIARY, SOVEREIGN`

## Explicit channel exceptions

- **📜┊𝐬𝐞𝐫𝐯𝐞𝐫・𝐫𝐮𝐥𝐞𝐬** — `SERVER_RULES_PUBLIC` — view `@everyone` — chat `read-only`
- **✅┊𝐯𝐞𝐫𝐢𝐟𝐲・𝐚𝐜𝐜𝐞𝐬𝐬** — `VERIFY_ACCESS` — view `UNVERIFIED` — chat `UNVERIFIED`
- **❓┊𝐠𝐚𝐦𝐞・𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧** — `SUPPORT_FORUM_INTERACTIVE` — view `PUBLIC_VERIFIED, SUPPORT` — chat `PUBLIC_VERIFIED, SUPPORT`
- **🎫┊𝐜𝐫𝐞𝐚𝐭𝐞・𝐭𝐢𝐜𝐤𝐞𝐭** — `CREATE_TICKET_INTERACTIVE` — view `PUBLIC_VERIFIED, SUPPORT` — chat `PUBLIC_VERIFIED, SUPPORT`
- **🎫┊𝐩𝐚𝐫𝐭𝐧𝐞𝐫・𝐚𝐩𝐩𝐥𝐲** — `PARTNER_APPLY_INTERACTIVE` — view `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN` — chat `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN`
- **🛡️┊𝐩𝐫𝐢𝐦𝐞・𝐬𝐭𝐚𝐟𝐟** — `PRIME_STAFF_PRIVATE` — view `STAFF_ALL` — chat `STAFF_ALL`
- **🎉│𝐄𝐯𝐞𝐧𝐭・𝐀𝐜𝐭𝐢𝐯𝐞** — `EVENT_ACTIVE_INTERACTIVE` — view `PUBLIC_VERIFIED, EVENT_STAFF` — chat `PUBLIC_VERIFIED, EVENT_STAFF`
- **🔊 │ 𝐖𝐚𝐫 ・ 𝐂𝐨𝐦𝐦𝐬** — `VOICE_WAR_COMMS` — view `DEFENCE_ALL` — chat `DEFENCE_ALL`
- **🎧 │ 𝐂𝐡𝐢𝐥𝐥 ・ 𝐙𝐨𝐧𝐞** — `VOICE_CHILL` — view `PUBLIC_VERIFIED` — chat `PUBLIC_VERIFIED`
- **🛡️ │ 𝐓𝐞𝐚𝐦 ・ 𝟏** — `VOICE_TEAM_1_COMMAND` — view `DEFENCE_COMMAND, SOVEREIGN` — chat `DEFENCE_COMMAND, SOVEREIGN`
- **🛡️ │ 𝐓𝐞𝐚𝐦 ・ 𝟐** — `VOICE_TEAM_2_SPECIALISTS` — view `DEFENCE_SPECIALISTS, SOVEREIGN` — chat `DEFENCE_SPECIALISTS, SOVEREIGN`
- **📜┊𝐩𝐨𝐥𝐢𝐜𝐲・𝐛𝐮𝐥𝐥𝐞𝐭𝐢𝐧** — `POLICY_BULLETIN_PUBLIC` — view `PUBLIC_VERIFIED, GOVERNMENT, PRESS` — chat `GOVERNMENT, PRESS`
- **📢┊𝐩𝐮𝐛𝐥𝐢𝐜・𝐧𝐨𝐭𝐢𝐜𝐞** — `PUBLIC_NOTICE` — view `PUBLIC_VERIFIED, GOVERNMENT, PRESS` — chat `GOVERNMENT, PRESS`
- **📊┊𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲・𝐫𝐞𝐩𝐨𝐫𝐭** — `COMMUNITY_REPORT` — view `PUBLIC_VERIFIED, GOVERNMENT` — chat `PUBLIC_VERIFIED, GOVERNMENT`
- **💬┊𝐜𝐢𝐯𝐢𝐜・𝐟𝐨𝐫𝐮𝐦** — `CIVIC_FORUM` — view `PUBLIC_VERIFIED, GOVERNMENT` — chat `PUBLIC_VERIFIED, GOVERNMENT`
- **📢┊𝐭𝐞𝐚𝐦・𝐫𝐞𝐜𝐫𝐮𝐢𝐭𝐦𝐞𝐧𝐭** — `TEAM_RECRUITMENT_BOARD` — view `PUBLIC_VERIFIED, RECRUITMENT` — chat `RECRUITMENT`
- **🎮┊𝐥𝐨𝐨𝐤𝐢𝐧𝐠・𝐟𝐨𝐫・𝐭𝐞𝐚𝐦** — `LOOKING_FOR_TEAM_PANEL` — view `PUBLIC_VERIFIED, RECRUITMENT` — chat `RECRUITMENT`
- **🏆┊𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐞・𝐭𝐞𝐚𝐦𝐬** — `COMPETITIVE_TEAMS` — view `PUBLIC_VERIFIED, RECRUITMENT` — chat `PUBLIC_VERIFIED, RECRUITMENT`
- **🤝┊🤝𝐝𝐢𝐩𝐥𝐨𝐦𝐚𝐭𝐢𝐜・𝐜𝐨𝐧𝐭𝐚𝐜𝐭** — `DIPLOMATIC_CONTACT` — view `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN` — chat `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN`
- **🎉┊🎉𝐣𝐨𝐢𝐧𝐭・𝐞𝐯𝐞𝐧𝐭𝐬** — `JOINT_EVENTS` — view `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN` — chat `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN`
- **🎫┊🎫𝐞𝐦𝐛𝐚𝐬𝐬𝐲・𝐭𝐢𝐜𝐤𝐞𝐭** — `EMBASSY_TICKET` — view `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN` — chat `PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN`
- **📜┊𝐫𝐨𝐲𝐚𝐥・𝐜𝐨𝐝𝐞𝐱** — `ROYAL_CODEX_PUBLIC` — view `PUBLIC_VERIFIED, JUDICIARY, SOVEREIGN` — chat `JUDICIARY, SOVEREIGN`
- **📢┊𝐣𝐮𝐝𝐢𝐜𝐢𝐚𝐥・𝐧𝐨𝐭𝐢𝐜𝐞𝐬** — `JUDICIAL_NOTICES_PUBLIC` — view `PUBLIC_VERIFIED, JUDICIARY, SOVEREIGN` — chat `JUDICIARY, SOVEREIGN`
- **test** — `OWNER_TEST_PRIVATE` — view `SOVEREIGN` — chat `SOVEREIGN`
- **⛔-do-not-post-here** — `DO_NOT_POST_PUBLIC_READ_ONLY` — view `@everyone` — chat `read-only`
- **warroom-28127** — `RUNTIME_WARROOM_PRIVATE` — view `DEFENCE_ALL` — chat `DEFENCE_ALL`

## Judiciary behavior

`court-hall` and the other case-work channels remain private to the judicial base roles. Temporary defendant/participant visibility remains a separate dynamic member-access concern; the static S10.10 memory does not make those case channels public.

## Important limitation

S10.10 still manages only `VIEW_CHANNEL` and `SEND_MESSAGES`. It does not configure voice `CONNECT/SPEAK` or forum-specific thread creation permissions. Those require a separate permission scope if desired.