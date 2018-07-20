/**
 * _private 규칙 변형 패턴
 * _name 또는 _getElements()와 같이 비공개라는 의미로 밑줄을 끝에 붙인다.
 * _protected 프로퍼티에는 밑줄 한 개, __private() 프로퍼티에는 밑줄 두 개를 사용한다.
 *
 * 공통 js Parameter
 * 함수의 확장성을 고려하여, Parameter 값을 Json 형태로 사용
 * getFunction({id: 'id', name: 'name'});
 */

/**
 * common js 컨트롤 클래스
 *
 * 인스턴스를 생성
 * var _commonctrl = new CommonCtrl('');
 *
 * @date    : 2018-07-20
 * @author  : Kim, Myung-Wook
 *
 * @caution : Common에 사용되는 함수는 json형태의 parameter로 전달 (확장성 고려)
 */



var CommonCtrl = function(param) {

};

// CommonCtrl prototype
CommonCtrl.prototype = {
    /**
     * Undefinded Check
     *
     * @param obj
     * @return true or false
     */

    isUndefined: function(obj) {
        return typeof(obj) != "undefined" ? true : false;
    }
}