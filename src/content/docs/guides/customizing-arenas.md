---
title: "Customizing Arenas"
---

## Changing the Display Name

To change the display name of an arena use the following command:

```mcfunction
/nda arena displayName <arena name> <display name>
```

The display name argument expects a string in the [legacy format](https://docs.advntr.dev/serializer/legacy.html).

For example, the command:

```mcfunction
/nda arena displayName forest1 &a&lForest 1
```

Will change the display name of the arena `forest1` to <img style="vertical-align: middle; display: inline;" alt="green and bold Forest 1 text" src="/src/assets/docs/guides/customizing-arenas/forest1-display-name.png" />

## Changing the Description

To change the description of an arena use the following command:

```mcfunction
/nda arena description <arena name> <display name>
```

The description argument expects a string in the [MiniMessage format](https://docs.advntr.dev/minimessage/format.html).

For example, the command

```mcfunction
/nda arena description forest1 <gradient:red:blue>[click to join]</gradient><br><br><dark_gray>An arena with lots of trees</dark_gray>
```

Will produce the following description:

![Forest 1 description](/src/assets/docs/guides/customizing-arenas/forest1-description.png)

## Changing the Item

To change the item that represents an arena in the GUI use the following command:

```mcfunction
/nda arena item <arena name> <item>
```
