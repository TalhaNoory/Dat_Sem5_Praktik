let env_car = "Tesla" 
// Global variable - can be accessed by all functions and objects

function cars() {
    console.log(env_car)

    let pol_car = "Audi" 
    // Local variable - can ONLY be accessed from inside the given function or object
}

cars()

// Downside of global variable - 
// 1. we can't have the same name within the global scope of the global variable.
// 2. resource heavy, compared to local variables, which are inside functions.