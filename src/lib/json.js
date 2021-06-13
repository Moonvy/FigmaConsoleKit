export function show(data) {
    let ob = {}
    for (let key in data) {
        // 跳过一些 key
        if (["horizontalPadding", "verticalPadding"].includes(key)) {
            continue
        }

        let val
        try {
            val = data[key]
        } catch (e) {
            console.error("err get:" + key, e)
        }
        // 去掉 Symbol
        if (typeof val == "symbol") {
            val = val.description
        }
        ob[key] = val
    }
    return ob
}

export function json(data) {
    return JSON.stringify(show(data))
}
