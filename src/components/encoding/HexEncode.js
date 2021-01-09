import React, { useState } from 'react';
import { Button, Input, Typography, message, Divider } from 'antd';
import { CopyOutlined, createFromIconfontCN, ClearOutlined } from '@ant-design/icons';
import Clipboard from 'react-clipboard.js';
import QueueAnim from 'rc-queue-anim';

const { Title, Paragraph } = Typography;
const IconFont = createFromIconfontCN({
	scriptUrl: [ './iconfont.js' ]
});

function toHex(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		result += str.charCodeAt(i).toString(16).toUpperCase();
	}
	return result;
}
function hex2a(hex) {
	var str = '';
	for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

const HexEncode = () => {
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
			setOutput(toHex(input));
		} else if (type === 'decode') {
			try {
				setOutput(hex2a(input));
			} catch (ex) {
				setOutput('无法正确解码：十六进制不正确');
				message.error('不正确的Base64，请尝试其他方法');
			}
		}
		return;
	};
	return (
		<QueueAnim delay={300} duration={1500}>
			<div style={{ margin: 15 }}>
				<Title variant='Title level={3}' style={{ fontWeight: 'bold' }}>
					十六进制编码/解码
				</Title>
				<Paragraph>
					十六进制数字系统，通常缩写为“hex”，是由16个符号组成的数字系统
					(基地16)。标准的数字系统称为十进制(以10为基数)，使用10个符号:
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9。十六进制使用十进制数和六个额外的符号。
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
					placeholder='输入ASCII/十六进制值进行解码或编码'
				/>
				<Button
					type='primary'
					style={{ marginBottom: 10, marginTop: 15 }}
					onClick={() => handleClick('encode')}
				>
					<IconFont type='icon-lock' />
					Encode
				</Button>
				<Button
					type='dashed'
					style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					onClick={() => handleClick('decode')}
				>
					<IconFont type='icon-lock-open' />
					Decode
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
					<ClearOutlined /> 清空
				</Button>
			</div>
		</QueueAnim>
	);
};

export default HexEncode;
