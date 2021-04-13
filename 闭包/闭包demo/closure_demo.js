function foo() {
    let name = "ronger";
    console.log(name);
}

foo()


function yanronginfo() {
    
    // logic a lot logit
    
    // logic
    let yanrong_husband = "jianyong";
    let yanrong_name = "yanrong";
    let baby_name = "qingtian";

    function get_info_with_age(age) {
        if (age >= 25) {
            return {
                "name": yanrong_name,
                "husbend": yanrong_husband,
                "baby": baby_name
            }
        }

        return {
            "name": yanrong_name,
            "husbend": yanrong_husband,
        }
    }

    return get_info_with_age
}

module.exports = {
    yanronginfo: yanronginfo
}