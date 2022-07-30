# PiServer

Dead simple piping server connecting two universe between HTTP-requests and stdio-CLI. Worked line by line.

## Usage

```shell
piserve | snosay --voice "Microsoft David Desktop"
piserve | snosay --voice "Microsoft David Desktop"
```

```shell

# sending text to stdout
curl http://localhost:25971/ -d "Hello, World" -H "content-type: text/plain"
curl http://localhost:25971/text/Hello,%20World
curl http://localhost:25971/?text=Hello,+World
curl http://localhost:25971/ -d "{""text"":""Hello, World""}" -H "content-type: application/json"

# stop server
curl http://localhost:25971/stop
```

## TODO

- [x] Should never run any command by http requests
- [ ] Read stdin by http requests
- [ ] Add host and port options
- [ ] Sending binary by base64
- [ ] Files upload or download

## Reference

[https://www.npmjs.com/package/stdserve](https://www.npmjs.com/package/stdserve)
