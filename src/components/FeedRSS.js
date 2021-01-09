import React from 'react';
import { Typography, Card, Col, Row, Avatar, Tooltip, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { goTo } from 'react-chrome-extension-router';
import { LinkOutlined, EyeOutlined, GithubOutlined } from '@ant-design/icons';
import ExploitDB from './rss/ExploitDB';
import Cisco from './rss/Cisco';
import cve from './rss/Cve';
import cxsecurity_choose from './rss/CxsecurityChoose';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

export default (props) => {
	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				利用RSS提要
			</Title>
			<Paragraph style={{ margin: 15 }}>
				对在饲料;攻击，Shellcode, 0days，远程攻击，本地攻击，Web应用程序，漏洞
				报告、安全文章、教程等。
			</Paragraph>
			<Row gutter={[ 32, 24 ]} style={{ padding: 15 }}>
				<Col span={12}>
					<Card
						onClick={() => goTo(ExploitDB)}
						style={{
							cursor: 'pointer',
							boxShadow:
								'0 0px 3.6px rgba(0, 0, 0, 0.017),  0 0px 10px rgba(0, 0, 0, 0.025),  0 0px 24.1px rgba(0, 0, 0, 0.033),  0 0px 80px rgba(0, 0, 0, 0.05)'
						}}
						cover={<img alt='exploit-db_website_homepage' src='https://i.imgur.com/ST3cgmI.png' />}
						actions={[
							<Tooltip title='看饲料'>
								<EyeOutlined key='goto_page' onClick={() => goTo(ExploitDB)} />
							</Tooltip>,
							<Tooltip title='网站链接'>
								<a href='https://exploit-db.com' rel='noreferrer noopener' target='_blank'>
									<LinkOutlined key='website_link' />
								</a>
							</Tooltip>
						]}
					>
						<Meta
							avatar={<Avatar src='https://www.exploit-db.com/images/spider-orange.png' />}
							title='ExploitDB'
							description='利用数据库漏洞'
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						onClick={() => goTo(Cisco)}
						style={{
							cursor: 'pointer',
							boxShadow:
								'0 0px 3.6px rgba(0, 0, 0, 0.017),  0 0px 10px rgba(0, 0, 0, 0.025),  0 0px 24.1px rgba(0, 0, 0, 0.033),  0 0px 80px rgba(0, 0, 0, 0.05)'
						}}
						cover={<img alt='cisco_image_logo' src='https://i.imgur.com/8EWAc2t.png' />}
						actions={[
							<Tooltip title='看饲料'>
								<EyeOutlined key='goto_page' onClick={() => goTo(Cisco)} />
							</Tooltip>,
							<Tooltip title='网站链接'>
								<a
									href='https://tools.cisco.com/security/center/publicationListing.x'
									rel='noreferrer noopener'
									target='_blank'
								>
									<LinkOutlined key='website_link' />
								</a>
							</Tooltip>
						]}
					>
						<Meta
							avatar={
								<Avatar src='https://cdn.1min30.com/wp-content/uploads/2018/07/Symbole-Cisco.jpg' />
							}
							title='Cisco'
							description='思科安全警告'
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						onClick={() => goTo(cve)}
						style={{
							cursor: 'pointer',
							boxShadow:
								'0 0px 3.6px rgba(0, 0, 0, 0.017),  0 0px 10px rgba(0, 0, 0, 0.025),  0 0px 24.1px rgba(0, 0, 0, 0.033),  0 0px 80px rgba(0, 0, 0, 0.05)'
						}}
						cover={<img alt='cve_image_logo' src='https://i.imgur.com/AtKXVuk.png' />}
						actions={[
							<Tooltip title='看饲料'>
								<EyeOutlined key='goto_page' onClick={() => goTo(cve)} />
							</Tooltip>,
							<Tooltip title='网站链接'>
								<a href='https://www.cve-search.org/' rel='noreferrer noopener' target='_blank'>
									<LinkOutlined key='website_link' />
								</a>
							</Tooltip>
						]}
					>
						<Meta
							avatar={
								<Avatar src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0012/5120/brand.gif?itok=mqo4KWCS' />
							}
							title='CVE'
							description='CVE搜索引擎'
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						onClick={() => goTo(cxsecurity_choose)}
						style={{
							cursor: 'pointer',
							boxShadow:
								'0 0px 3.6px rgba(0, 0, 0, 0.017),  0 0px 10px rgba(0, 0, 0, 0.025),  0 0px 24.1px rgba(0, 0, 0, 0.033),  0 0px 80px rgba(0, 0, 0, 0.05)'
						}}
						cover={<img alt='cve_image_logo' src='https://i.imgur.com/agGXTkQ.jpg' />}
						actions={[
							<Tooltip title='Watch the feed'>
								<EyeOutlined key='goto_page' onClick={() => goTo(cxsecurity_choose)} />
							</Tooltip>,
							<Tooltip title='Website link'>
								<a href='https://cxsecurity.com//' rel='noreferrer noopener' target='_blank'>
									<LinkOutlined key='website_link' />
								</a>
							</Tooltip>
						]}
					>
						<Meta
							avatar={
								<Avatar src='https://pbs.twimg.com/profile_images/3596734713/c2cd4061a323024ff00ccf0c83c61d1d.jpeg' />
							}
							title='CX'
							description='CXSECURITY'
						/>
					</Card>
				</Col>
			</Row>
			<div style={{ textAlign: 'center' }}>
				<Paragraph>你对饲料有什么建议吗?</Paragraph>
				<Button icon={<GithubOutlined />} type='link'>
					<a
						href='https://github.com/LasCC/Hack-Tools/issues/new'
						rel='noreferrer noopener'
						target='_blank'
						style={{ marginLeft: 8 }}
					>
						给我们您的反馈
					</a>
				</Button>
			</div>
		</QueueAnim>
	);
};
