This is a web service which given a lock address will serve a SVG file including all of the jazzicons for the members of that lock.

Params **default**:

- members: **all**|valid (valid will exclude expired)
- width: (in px), **300px**

Caching: we should cache the generated images for enough time to avoid re-generating it constantly
