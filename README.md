# Member Wall!

Member wall is a serverless application which shows the MetaMask icons of all members for one or more Unlock locks.

It renders the wall as a SVG image which can easily be embedded on any image!

## Unlock Blog members

The image below shows all of the [Unlock Blog](https://unlock-protocol.com/blog/) members!

![Members](https://member-wall.unlock-protocol.com/api/members?locks=0xB0114bbDCe17e0AF91b2Be32916a1e236cf6034F&maxHeight=300)


## Customize

Just use an `<img/>` with a `src` poiting to `https://member-wall.julien51.now.sh/api/members?locks=`. Customize with the following query strings:

- `locks` _(required)_: coma separated list of locks
- `maxWidth` _(optional, defaults to 800)_: maximum width (actual size might be smaller to avoid clipping icons)
- `maxHeight` _(optional, defaults to 500)_: maximum height (actual size might be smaller to avoid clipping icons)

You can also use `<object data="https://member-wall.julien51.now.sh/api/members?locks=..." type="image/svg+xml"/>` to make the links on each icon clickable!

## TODO

- Add the ability to list only non-expired memberships, grey out expired memberships... etc
- Link to better profiles, maybe 3box?
- Add reverse ENS resolution

## Colophon

This is built with [Unlock](https://unlock-protocol.com/), [The Graph](https://thegraph.com/) and [Jazzicon](https://github.com/danfinlay/jazzicon), and deployed with [Zeit](https://zeit.co/). The code is [open source](https://github.com/julien51/member-wall)!
