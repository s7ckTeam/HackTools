import React, { useState } from 'react';
import { Typography, Empty, Spin, Button, PageHeader, Tag, Descriptions, Input, List, Divider, Result } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { CloseCircleOutlined } from '@ant-design/icons';
import { goTo } from 'react-chrome-extension-router';
import { useQuery } from 'react-query';
import FeedRSS from '../FeedRSS';

const { Paragraph, Title, Text } = Typography;
const { Search } = Input;

export default (props) => {
	const [ values, setValues ] = useState({
		cve: 'CVE-2017-0146'
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const fetchApi = async () => {
		const res = await fetch(`https://cors-anywhere.herokuapp.com/https://cve.circl.lu/api/cve/${values.cve}`);
		return res.json();
	};
	const { isLoading, isError, data, error, refetch, isFetching } = useQuery('cve', fetchApi);

	if (isLoading) {
		return (
			<div style={{ textAlign: 'center', marginTop: 25 }}>
				<Spin tip='Loading...' />
			</div>
		);
	}
	if (isError) {
		return (
			<div>
				<Empty
					style={{ marginTop: 25 }}
					image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
					imageStyle={{
						height: 60
					}}
					description={<span>Error getting the data please contact us.</span>}
				>
					<pre>{error.message}</pre>
					<Button danger>
						<a href='https://github.com/LasCC/Hack-Tools/issues' rel='noreferrer noopener' target='_blank'>
							报告错误
						</a>
					</Button>
				</Empty>
			</div>
		);
	}

	return (
		<QueueAnim delay={300} duration={1500}>
			<PageHeader
				onBack={() => goTo(FeedRSS)}
				title='CVE Search engine'
				extra={[
					<Button key='1' type='primary'>
						<a href='https://www.cve-search.org/' rel='noreferrer noopener' target='_blank'>
							访问及网站
						</a>
					</Button>
				]}
			/>
			<Search
				name='CVE'
				size='large'
				enterButton
				allowClear
				placeholder='Enter your CVE ex : CVE-2017-0146'
				onChange={handleChange('cve')}
				onSubmit={() => refetch()}
				onSearch={() => refetch()}
			/>
			{data != null ? (
				<div>
					<div
						key='a'
						style={{
							padding: 15
						}}
					>
						<Descriptions title='CVE Info' style={{ marginTop: 15 }}>
							<Descriptions.Item label='Published'>
								<Tag color='blue'>
									{data.Published.slice(
										data.Published.indexOf('20'),
										data.Published.lastIndexOf('0') - 8
									)}
								</Tag>
							</Descriptions.Item>
							<Descriptions.Item label='Modified'>
								<Tag color='geekblue'>
									{data.Modified.slice(
										data.Modified.indexOf('20'),
										data.Modified.lastIndexOf('0') - 8
									)}
								</Tag>
							</Descriptions.Item>
							<Descriptions.Item label='CCVS'>
								{(() => {
									if (data.cvss >= 0.1 && data.cvss <= 3.9)
										return <Tag color='success'>{data.cvss}</Tag>;
									if (data.cvss >= 4.0 && data.cvss <= 6.9)
										return <Tag color='warning'>{data.cvss}</Tag>;
									if (data.cvss >= 7.0 && data.cvss <= 10)
										return <Tag color='error'>{data.cvss}</Tag>;
								})()}
							</Descriptions.Item>
							<Descriptions.Item label='CVE ID'>
								<Tag color='purple'>{data.id}</Tag>
							</Descriptions.Item>
							<Descriptions.Item label='Severity'>
								{(() => {
									if (data.cvss >= 0.1 && data.cvss <= 3.9)
										return (
											<Paragraph strong style={{ color: '#389e0d' }}>
												低
											</Paragraph>
										);
									if (data.cvss >= 4.0 && data.cvss <= 6.9)
										return (
											<Paragraph strong type='warning'>
												中等
											</Paragraph>
										);
									if (data.cvss >= 7.0 && data.cvss <= 8.9)
										return (
											<Paragraph strong style={{ color: '#f5222d' }}>
												 高的
											</Paragraph>
										);
									if (data.cvss >= 9.0 && data.cvss <= 10)
										return (
											<Paragraph strong style={{ color: '#820014' }}>
												决定性的
											</Paragraph>
										);
								})()}
							</Descriptions.Item>
							<Descriptions.Item label='Vector'>{data.access.vector}</Descriptions.Item>
						</Descriptions>
						<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }} style={{ marginTop: 10 }}>
							{data.summary}
						</Paragraph>
					</div>
					<Divider dashed />
					<div
						key='b'
						style={{
							padding: 15
						}}
					>
						<Title level={3}>引用/文档</Title>
						<List
							itemLayout='horizontal'
							dataSource={data.references}
							style={{ marginTop: 15 }}
							renderItem={(list) => (
								<List.Item>
									<a href={list} alt='exploit_db_link' target='_blank' rel='noreferrer noopener'>
										{list}
									</a>
								</List.Item>
							)}
						/>
					</div>
				</div>
			) : (
				<Result
					status='错误'
					title='发生了一些错误'
					subTitle='请检查并修改以下信息后再重新提交'
				>
					<div className='desc'>
						<Paragraph>
							<Text
								strong
								style={{
									fontSize: 16
								}}
							>
								您提交的内容有以下错误:
							</Text>
						</Paragraph>
						<Paragraph>
							<CloseCircleOutlined className='site-result-demo-error-icon' /> 您提交的值{' '}
							<b>不存在</b>.
						</Paragraph>
						<Paragraph>
							<CloseCircleOutlined className='site-result-demo-error-icon' /> The{' '}
							<b>API正在维护中</b>,请再试一次。
						</Paragraph>
					</div>
				</Result>
			)}
			<div>
				{isFetching ? (
					<div style={{ textAlign: 'center', marginTop: 25 }}>
						<Spin tip='等待...' />
					</div>
				) : null}
			</div>
		</QueueAnim>
	);
};
