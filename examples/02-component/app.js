// Component Specs and Lifecycle
// �������Ʈ
// http://reactkr.github.io/react/docs/component-specs-ko-KR.html

var React = require('react');

module.exports = React.createClass({
	componentWillMount: function() {
		// ���� �������� �Ͼ�� ����(�ѹ� ȣ��)
		console.log('componentWillMount');
    },
    componentDidMount: function() {
		// ���� �������� �Ͼ ����(�ѹ� ȣ��)
		console.log('componentDidMount');
    },
	componentWillReceiveProps: function(nextProps) {
		// ������Ʈ�� ���ο� props�� ���� �� ȣ��(���� ������ �ÿ��� ȣ����� ����)
		console.log('componentWillReceiveProps');
	},
    componentWillUpdate: function(nextProps, nextState){
		// ���ο� props�� state�� �޾��� �� ������ ������ ȣ��(���� ������ �ÿ��� ȣ����� ����)
		console.log('componentWillUpdate');
    },
    componentDidUpdate: function(prevProps, prevState) {
		// ������Ʈ�� ������Ʈ�� DOM�� �ݿ��� ���Ŀ� ȣ��(���� ������ �ÿ��� ȣ����� ����)
		console.log('componentDidUpdate');
    },
    componentWillUnmount: function(){
		// ������Ʈ�� DOM���� ����Ʈ ���� �Ǳ� ������ ȣ��
		console.log('componentWillUnmount');
    },
    render : function() {
		// �ʼ� �׸�
		console.log('render');
    }
});
