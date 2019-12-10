// // 常用方法
// // test(string)   exec(string)
// let reg5: RegExp = /jspang/i
// let website: string = 'jspang.com'
// let result1: boolean = reg5.test(website);
// let result2: any = reg5.exec(website);

// console.log(result1);
// console.log(result2);

// let line = "#3. 来士大夫"
// var re = new RegExp('(^\\s*\\' + '#' + '+)\\s*((\\d+\\.)+)\\s+', "g");
// line = line.replace(re, "$1");
// console.log(line);

if (true) {
    let line2 = "# 23. 来士大夫\n"
    var re2 = new RegExp('^\\s*\\' + '#' + '+\\s*(\\d+)\\.+\\s+', "gi");
    let word = re2.exec(line2);
    if ((word)) {
        let seq_tmp = word[1]
        var seq = +seq_tmp;  //转换为数值
    };
};
seq++;
console.log(seq);