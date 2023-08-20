//1.Aeroplane ticket booking 
//2.Make a burger

const placeOrder=(callback)=>{
    setTimeout(() => {
        console.log("flight is ready");
        callback();
    }, 2000);
}

const aeroplane=(callback)=>{
    setTimeout(() => {
        console.log("aeroplane started")
        callback();
    }, 1000);
}

const boardingpass=(callback)=>{
    setTimeout(() => {
        console.log("boarding pass started")
        callback();
    }, 1000);
}

const securityCheck=(callback)=>{
    setTimeout(() => {
        console.log("security check done")
        callback();
    }, 2000);
}

const navigationPanel=(callback)=>{
    setTimeout(() => {
        console.log("navigattion done")
        callback();
    }, 1000);
}

const bus=(callback)=>{
    setTimeout(() => {
        console.log("travelling into bus")
        callback();
    }, 2000);
}

const airplane=(callback)=>{
    setTimeout(() => {
        console.log("travelling in airplane")
        callback();
    }, 3000);
}

const aircraft=(callback)=>{
    setTimeout(() => {
        console.log("travelling in aircraft")
        callback();
    }, 1000);
}
const destination=(callback)=>{
    setTimeout(() => {
        console.log("reaching destination soon ...")
        callback();
    }, 1000);
}

const burger=(callback)=>{
    setTimeout(() => {
        console.log("Burger ban na chalu kiya jaye")
        callback();
    }, 5000);
}

const aloo=(callback)=>{
    setTimeout(() => {
        console.log("aloo is preparing")
        callback();
    }, 3000);
}
const tikki=(callback)=>{
    setTimeout(() => {
        console.log("tikki is preparing")
        callback();
    }, 3000);
}
const veg=(callback)=>{
    setTimeout(() => {
        console.log("veg  is preparing")
        callback();
    }, 2000);
}
const dough=(callback)=>{
    setTimeout(() => {
        console.log("dough  is preparing")
        callback();
    }, 3000);
}
const bread=(callback)=>{
    setTimeout(() => {
        console.log("bread is preparing")
        callback();
    }, 5000);
}
const ready=(callback)=>{
    setTimeout(() => {
        console.log("getting your burger")
        callback();
    }, 3000);
}


console.log("Planning to fly")
placeOrder(()=>{
    console.log("journey start")
    aeroplane(()=>{
        console.log("proceeds toward boardingpass")
        boardingpass(()=>{
            console.log("proceeds toward security check")
            securityCheck(()=>{
                console.log("proceeds toward navigation panel")
                navigationPanel(()=>{
                    console.log("proceeds toward bus")
                    bus(()=>{
                        console.log("proceeds toward airplane")
                        airplane(()=>{
                            console.log("proceeed towards aircarft")
                            aircraft(()=>{
                                console.log("proceed towards destination")
                                destination(()=>{
                                    console.log("reached Destination")
                                    burger(()=>{
                                        console.log("******Burger Making Started*********")
                                        aloo(()=>{
                                            console.log("aloo prepared")
                                            tikki(()=>{
                                                console.log("tikki ban gai")
                                                veg(()=>{
                                                    console.log("kheera daal diya tamataar mahnge hai nahi dale")
                                                    dough(()=>{
                                                        console.log("aata lag gaya")
                                                        bread(()=>{
                                                            console.log("bread lag gya")
                                                            ready(()=>{
                                                                console.log("🍔🍔🍔Boorger Ready")
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



