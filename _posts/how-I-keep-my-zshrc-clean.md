---
title: "How I keep my .zshrc file clean"
excerpt: "Those who know me, know that I am a huge sucker for keeping things organized.
And this is how I maintain my `.zshrc` file clean and organized."
coverImage: "/assets/blog/hello-world/cover.jpg"
createdOn: "2023-03-16T05:35:07.322Z"
updatedOn: "2023-03-20T05:35:07.322Z"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Those who know me, know that I am a huge sucker for keeping things organized.
And this is how I maintain my `.zshrc` file clean and organized.

## Folder structure

```
~
|-- .zshrc
|-- .zshrc_helpers/
|    |-- home_manager.sh
|    |-- java_version_manager.sh

```

## Important to know

1. Files can be import into a bash file using either `source` or `.`
2. The name of the file or having `.sh` extension doesn't matter.

>
> All below examples works the same!
> ```
> source hello
> source hello.sh
> . hello
> . hello.sh
>```
But I create my manager files with `.sh` extension. Because It makes editing easier
