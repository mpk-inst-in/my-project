const JWT = require('jsonwebtoken');


const payload = { message: 'Hi Friends' };

const pvt_key = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCeHvva8Ti7Eh0+
RBavbZq7QdZPv9xRLXz8kWXGKVydHndyuwe2Z6YuyB8jmEnGuKeWg8cMjH/Dx42E
PO9xP99hrVF2pHssKneZPuMr6PlwpGdrkC2K+D8xzlSeB88wFKWfudRjo3D7R11Y
WgSBCVV6TqduHtAysnUqWp4zubySjacBbZ/4Q5tLiCqXe8DeWvnbma5dX59H6hSt
rBK8HQKXsS6VantDAIf/8WOSLxAUtNBWBMJg9DW6Nykhxs5+MJruhym4mbT+4Bv0
IWdToJ4mp2m5egAjWNbEV7RjyGM0eYkGgGcYuvNXCS41ljM6UcZ3Hf9UcPOacyG3
TOI73nWhAgMBAAECggEBAINoWoTVTgFiB32U1omKfDo9d98lIvMv65x3NW6fN0G4
bSqjNsCnmRtt4zsQt9d35IcZExZhuVi6geixP4kNvRaPFJGWFmtZC7YG5oK6hnrP
lsd0tfS1ZMd+oyIGeXCK6C47IMCBt0aNQ41GmlGmsSwJK+o/n2VSnD7LuohgRtA/
rCNwjN3UxgGs/vIrDs/elKF0uvnC4SdJltvTAG65cqKJUBKbQ8XfffyoxqBbFFsA
cuHZbXDteyNi6N0W74NQ46jsxwwb/RLvKjAXd1gjGqItm6OwyJZJUrJGMwejOCU0
YXnMoGYz+KE0Tz0/XFXYYHdes0vz8+xQhvGVb+FJrbECgYEA0dE1yj0rovT6lfcX
vvrXm6HkOQg+xPD7w9kN+wM8ZEhBu7mqiy9TVCv859h8Xbtd0EwpeRe8Bae3l2bA
6BO/d1boNPjYvhtErruTPFq29KMrKxgkKJMTtyetjyIsSow9vneKNdafWJxRXC/a
mWuyKFQKEUYZH9H3IVc5qHFb0a0CgYEAwOzLU+rGWvw0W3E7nQarV2tVIQkgLl/2
GnhS4x9u3snjDbWEJgyjl1AlhRQLEVdKnFz+Uhjrf3hDeHFw+ou8m0t5fFQo6PGa
eM+Bingwa8nUELY/4FuAI94bX57JYmg0PUqFSByaSDXuXWpi3c9CZ8Bd5RW4qHWj
28dLvVRM+kUCgYAwzCFgeb2OVr945VDGf/xpG8vCX+KJVyqWsAKKYIRJJmzzRgkd
+dG9f8V//l9eRVdaPHxgx15ZSlpugd1XnFApZzL2LvHptNnScZmardZjKxe9HA48
yYgKTtYUtfPrGpa5l3+zackBiMl7UT3b9KooqvL0dYMeXWzGekzUmhiquQKBgBF+
p6WRebFQg5LzPrurmigQRKT9RdzOuOuHk8Si2hP77MoWdshYhxE2pGBgA+zrpIlv
aWSae+iQSFYIu30M5OqUOo0KuLb/CcoAzzd2VLXBlKh7TmmTApi+EG9oX8y7tFkG
g/WZGmiH83inKBYDMHtmF12pzZgBKv3IIdcmaOCdAoGBAM8nv6v2cF88y7fnr31s
2N2Ol9W2alsL6ycjroMr+4z4+0nAWHOCburT/mT0w+VZw43ryZcVi/i6pVnuEBr5
B3qiHkppgQcGCok8sXiBFFvJMAqFbUjNepqBk4DSE8tKBG8FuALTUZSz4CfWaPAD
+c/ONY5w55b7nnJb7WO/H3w9
-----END PRIVATE KEY-----`;

const signed = JWT.sign(payload, pvt_key, {
  algorithm: 'RS256',
  expiresIn: '1h'
});

console.log(signed);

const pub_key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnh772vE4uxIdPkQWr22a
u0HWT7/cUS18/JFlxilcnR53crsHtmemLsgfI5hJxrinloPHDIx/w8eNhDzvcT/f
Ya1RdqR7LCp3mT7jK+j5cKRna5Ativg/Mc5UngfPMBSln7nUY6Nw+0ddWFoEgQlV
ek6nbh7QMrJ1KlqeM7m8ko2nAW2f+EObS4gql3vA3lr525muXV+fR+oUrawSvB0C
l7EulWp7QwCH//Fjki8QFLTQVgTCYPQ1ujcpIcbOfjCa7ocpuJm0/uAb9CFnU6Ce
JqdpuXoAI1jWxFe0Y8hjNHmJBoBnGLrzVwkuNZYzOlHGdx3/VHDzmnMht0ziO951
oQIDAQAB
-----END PUBLIC KEY-----`;

const decode = JWT.verify(signed, pub_key, {
  algorithm: 'RS256'
});

console.log('\n', decode, '\n');


