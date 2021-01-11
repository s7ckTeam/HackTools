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
	const successPayload = () => {
		message.success('复制成功');
	};
	const handleChange = (name) => (event) => {
		setInput(event.target.value);
	};
	const handleClick = (type) => {
		if (type === 'encode') {
			setOutput(encodeURI(input));
		} else if (type === 'decode') {
			try {
				setOutput(decodeURI(input));
			} catch (ex) {
				setOutput('无法正确解码：不正确的base64');
				message.error('不正确的Base64，请尝试其他方法');
			}
		} else if (type === 'qlencode') {
			setOutput(encodeURIComponent(input));
		} else if (type === 'qldecode') {
			setOutput(decodeURIComponent(input));
		}

		return;
	};
	return (
		<QueueAnim delay={300} duration={1500}>
			<div style={{ margin: 15 }}>
				<Title variant='Title level={3}' style={{ fontWeight: 'bold' }}>
					URL编码/解码
				</Title>
				<Paragraph>
					url编码是一种浏览器用来打包表单输入的格式。
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
					placeholder='输入进行url编码/解码'
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
				<Button
					type='primary'
					style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					onClick={() => handleClick('qlencode')}
				>
					<IconFont type='icon-lock' />
					强力Encode
				</Button>
				<Button
					type='dashed'
					style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					onClick={() => handleClick('qldecode')}
				>
					<IconFont type='icon-lock-open' />
					强力Decode
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
					placeholder='The results will appear here'
				/>
				<Clipboard component='a' data-clipboard-text={output}>
					<Button type='primary' style={{ marginBottom: 10, marginTop: 15 }} onClick={successPayload}>
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
