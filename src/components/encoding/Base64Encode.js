import React, { useState } from 'react';
import { Button, Input, Typography, message, Divider } from 'antd';
import { CopyOutlined, createFromIconfontCN, ClearOutlined } from '@ant-design/icons';
import Clipboard from 'react-clipboard.js';
import QueueAnim from 'rc-queue-anim';

const { Title, Paragraph } = Typography;
const IconFont = createFromIconfontCN({
	scriptUrl: [ './iconfont.js' ]
});

const Base64Encode = () => {
	const [ input, setInput ] = useState('');
	const [ output, setOutput ] = useState('');
	const { TextArea } = Input;
	const successBase64Copy = () => {
		message.success('复制成功！');
	};
	const handleChange = (name) => (event) => {
		setInput(event.target.value);
	};
	const handleClick = (type) => {
		if (type === 'encode') {
			setOutput(btoa(input));
		} else if (type === 'decode') {
			try {
				setOutput(atob(input));
			} catch (ex) {
				setOutput('无法正确解码：不正确的Base64');
				message.error('不正确的Base64，请尝试其他方法');
			}
		}
		return;
	};
	return (
		<QueueAnim delay={300} duration={1500}>
			<div style={{ margin: 15 }}>
				<Title variant='Title level={3}' style={{ fontWeight: 'bold' }}>
					Base64编码器/解码器
				</Title>
				<Paragraph>
					在计算机科学中，Base64是一组表示二进制数据的二进制到文本编码方案
					在ASCII字符串格式中，通过将其转换为基数64表示。
				</Paragraph>
			</div>
			<Divider dashed />
			<div
				key='a'
				style={{
					marginTop: 15,
					marginLeft: 15
				}}
			>
				<TextArea
					rows={4}
					value={input}
					onChange={handleChange('input')}
					placeholder='请输入要进行 Base64 编码或解码的字符'
				/>
				<Button
					type='primary'
					style={{ marginBottom: 10, marginTop: 15 }}
					onClick={() => handleClick('encode')}
				>
					<IconFont type='icon-lock' />
					编码
				</Button>
				<Button
					type='dashed'
					style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					onClick={() => handleClick('decode')}
				>
					<IconFont type='icon-lock-open' />
					解码
				</Button>
			</div>
			<div
				key='b'
				style={{
					marginTop: 15,
					marginLeft: 15
				}}
			>
				<TextArea
					rows={4}
					value={output}
					style={{ cursor: 'auto', marginTop: 15, color: '#777' }}
					placeholder='输出结果'
				/>
				<Clipboard component='a' data-clipboard-text={output}>
					<Button type='primary' style={{ marginBottom: 10, marginTop: 15 }} onClick={successBase64Copy}>
						<CopyOutlined /> 复制
					</Button>
				</Clipboard>
				<Button type='link' danger style={{ marginBottom: 10, marginTop: 15 }} onClick={() => setOutput('')}>
					<ClearOutlined /> 清理
				</Button>
			</div>
		</QueueAnim>
	);
};

export default Base64Encode;
