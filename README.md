# Justin Mathew

Senior platform engineer. I run **Postgres and Redis as a platform on Kubernetes**: operators, connection routing, backups, and the boring guarantees that keep data safe.

## What I work on

- **Databases on Kubernetes**: operating Postgres and Redis fleets with operators, in disconnected and regulated environments
- **Connection routing**: proxying and TLS/SNI-based routing so many database instances can share far fewer load balancers
- **Backup reliability**: proving backups actually happened on time, not just that they were scheduled
- **Change data capture**: finding and fixing Postgres edge cases in CDC and schema tools
- **Security and networking** (current deep dive): TLS handshakes, certificate chains and root CAs, SNI, and how trust actually works on the wire

## Upstream contributions

- [debezium/debezium#7828](https://github.com/debezium/debezium/pull/7828): fix PostgreSQL text defaults with escaped quotes (merged)
- [xataio/pgstream#1212](https://github.com/xataio/pgstream/pull/1212): fix explicit sequence discovery during CDC
- [liquibase/liquibase#7888](https://github.com/liquibase/liquibase/pull/7888): fix PostgreSQL JSON defaults in generated changelogs

## Projects

- [postgres-storage-advisor](https://github.com/mathewjustin/postgres-storage-advisor): Kubernetes operator (Go) that flags Postgres storage problems such as falling HOT updates, dead tuples, and bloat
- [debezium-sequence-lab](https://github.com/mathewjustin/debezium-sequence-lab) and [pgstream-sequence-lab](https://github.com/mathewjustin/pgstream-sequence-lab): reproducible labs for Postgres sequence sync bugs in CDC pipelines
- [system-design-notes](https://github.com/mathewjustin/system-design-notes): system design concepts and lessons from real systems

## Stack

Postgres · Redis · Kubernetes operators · Go · Java · pgBackRest · Debezium · Kafka · TLS/PKI · OpenSSL · Linux

## Writing

I explain what I learn at [justinmathew.com](https://www.justinmathew.com/), mostly Postgres internals, CDC, Kubernetes, and TLS. A couple of recent ones:

- [Why would your browser trust my root CA?](https://www.justinmathew.com/lets-talk-software/tls-root-ca/)
- [Hacking TLS](https://www.justinmathew.com/2025/12/hacking-tls.html): what was broken in the old TLS handshake, and how TLS 1.3 fixes it
