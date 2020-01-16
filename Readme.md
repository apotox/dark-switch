## DarkSwitch button

custom style for checkbox to switch between Dark/Light theme


<p align="center"> 
    <img src="demo/capture.git">
</p>

### Installation
```shell
    #NPM
    npm i --save dark-switch
    #YARN
    yarn add dark-switch

```

### Import/use

```javascript
    //import
    import DarkSwitch from "dark-switch"
```

```javascript

    <DarkSwitch onChange={event=>handler(event)} />

```

### use custom switch class css

```javascript

    <DarkSwitch classSwitch={"myclass"} onChange={event=>handler(event)} />

```


### use custom handler class css

```javascript

    <DarkSwitch classHandle={"myclass"} onChange={event=>handler(event)} />

```