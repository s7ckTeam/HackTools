import React from 'react';
import { Typography, Divider, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

const { Title, Paragraph } = Typography;

export default (props) => (
	<QueueAnim delay={300} duration={1500}>
		<Title
			variant='Title level={3}'
			style={{
				fontWeight: 'bold',
				margin: 15
			}}
		>
			关于我们
		</Title>
		<Paragraph
			style={{
				margin: 15
			}}
		>
			s7ck Team
		</Paragraph>
		<Divider dashed />
		<div
			key='a'
			style={{
				padding: 15,
				marginTop: 15
			}}
		>
			<Paragraph>
				s7ck HackTools，是一个web扩展，方便您的web应用程序渗透测试，如XSS、反向shell、编码转换等等。
				随着扩展，你不再需要在不同的网站或在您的本地搜索有效负载
				存储空间，大多数工具都是一键式访问。s7ck HackTools可以通过弹出窗口访问
				模式或在浏览器的Devtools部分的整个选项卡中使用F12或全屏使用。
			</Paragraph>
			<Paragraph>
				这个项目是免费维护、开发和提供的，基于原作者HackTools（http://github.com/LasCC/Hack-Tools）
				的汉化和修改，本项目会长期维护和更新
			</Paragraph>
			<Paragraph>原版HackTools是由Ludovic COULON和Riadh BOUCHAHOUA创建的</Paragraph>
		</div>
		<Divider dashed />
		<div
			key='b'
			style={{
				padding: 15,
				marginTop: 15
			}}
		>
			<Title variant='Title level={3}'> 特别感谢(以下排名不分先后) </Title> <Paragraph>s7ck Team </Paragraph>
			<Paragraph> Xbj </Paragraph> <Paragraph> d0gman </Paragraph><Paragraph> Morker </Paragraph>
			<Paragraph> HackTools的原作者 </Paragraph>
		</div>
	</QueueAnim>
);
