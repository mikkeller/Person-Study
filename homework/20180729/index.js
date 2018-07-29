var foo = {
    name: 'kmw',
    age: '31',
    job: 'frontend'
};

delete foo.name; // 프로퍼티만 삭제 가능할 뿐 객체를 삭제할 수는 없다.

var life;

for(life in foo) {
    console.log(life, foo[life]);
};