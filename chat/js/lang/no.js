/*
 * @package AJAX_Chat
 * @author Sebastian Tschan
 * @author DagArneKirkerod
 * @copyright (c) Sebastian Tschan
 * @license Modified MIT License
 * @link https://blueimp.net/ajax/
 */

// Ajax Chat language Object:
var ajaxChatLang = {

	login: '%s logger inn på Chat.',
	logout: '%s logger ut av Chat.',
	logoutTimeout: '%s har blitt utlogget (Tidsbegrensning).',
	logoutIP: '%s har blitt logget ut (Ugyldig IP Adresse).',
	logoutKicked: '%s har blitt logget ut (sparket ut).',
	channelEnter: '%s kommer inn på kanalen.',
	channelLeave: '%s forlater kanalen.',
	privmsg: '(hviskere)',
	privmsgto: '(hvisker til %s)',
	invite: '%s inviterer deg til å delta %s.',
	inviteto: 'Din invitasjon til %s å delta på kanal %s er sendt.',
	uninvite: '%s trekker din invitasjon fra kanal %s.',
	uninviteto: 'Din tilbaketrekkning av invitasjon til %s for kanal %s er sendt.', 
	queryOpen: 'Privat kanal åpnet til %s.',
	queryClose: 'Privat kanal til %s er stengt.',
	ignoreAdded: 'Lagt %s til listen over ignorerte brukere.',
	ignoreRemoved: 'Fjernet %s fra liste over ignorerte brukere.',
	ignoreList: 'Ignorerte Brukere:',
	ignoreListEmpty: 'Ingen ignorerte brukere på lista.',
	who: 'Påloggede Brukere:',
	whoChannel: 'Online Brukere i kanal %s:',
	whoEmpty: 'Ingen påloggede brukere på valgt kanal.',
	list: 'Tilgjenglige kanaler:',
	bans: 'Utsparkede Brukere:',
	bansEmpty: 'Ingen utsparkede brukere på lista.',
	unban: 'Bruker %s fjernet fra liste over utsparkede brukere.',
	whois: 'Bruker %s - IP adresse:',
	whereis: 'User %s is in channel %s.',
	roll: '%s triller %s og får %s.',
	nick: '%s is now known as %s.',
	toggleUserMenu: 'Toggle user menu for %s',
	userMenuLogout: 'Logout',
	userMenuWho: 'List online users',
	userMenuList: 'List available channels',
	userMenuAction: 'Describe action',
	userMenuRoll: 'Roll dice',
	userMenuNick: 'Endre brukernavn',
	userMenuEnterPrivateRoom: 'Skriv privat rom',
	userMenuSendPrivateMessage: 'Send en privat melding',
	userMenuDescribe: 'Send privat handling',
	userMenuOpenPrivateChannel: 'Åpne privat kanal',
	userMenuClosePrivateChannel: 'Lukk privat kanal',
	userMenuInvite: 'Invite',
	userMenuUninvite: 'Uninvite',
	userMenuIgnore: 'Ignore/Accept',
	userMenuIgnoreList: 'Liste med ignorerte brukere',
	userMenuWhereis: 'Vise kanal',
	userMenuKick: 'Kick/Ban',
	userMenuBans: 'Liste sperrede brukere',
	userMenuWhois: 'Vise IP',
	unbanUser: 'Tilbakekalle forbud av brukeren %s',
	joinChannel: 'Delta på kanal %s',
	cite: '%s sa:',
	urlDialog: 'Skriv inn adressen (URL) på web siden:',
	deleteMessage: 'Slett denne chat-melding',
	deleteMessageConfirm: 'Vil du virkelig slette den valgte chat-melding?',
	errorCookiesRequired: 'Cookies er påkrevet på denne chatten.',
	errorUserNameNotFound: 'Feil: Bruker %s ble ikke funnet.',
	errorMissingText: 'Feil: Mangler meldingstekst.',
	errorMissingUserName: 'Feil: Mangler Brukernavn.',
	errorInvalidUserName: 'Feil: Ugyldig brukernavn.',
	errorUserNameInUse: 'Feil: Brukernavnet er allerede i bruk.',
	errorMissingChannelName: 'Feil: Mangler navn på kanal.',
	errorInvalidChannelName: 'Feil: Feil navn på kanal: %s',
	errorPrivateMessageNotAllowed: 'Feil: Private meldinger ikke tillatt.',
	errorInviteNotAllowed: 'Feil: Du har ikke lov til å invitere noen til denne kanalen.',
	errorUninviteNotAllowed: 'Feil: Du har ikke lov til å fjerne invitasjon til noen brukere på denne kanalen.',
	errorNoOpenQuery: 'Feil: Ingen private kanaler er åpne.',
	errorKickNotAllowed: 'Feil: Du har ikke lov til å sparke ut %s.',
	errorCommandNotAllowed: 'Feil: Kommando ikke tillatt: %s',
	errorUnknownCommand: 'Feil: Ukjent kommando: %s',
	errorMaxMessageRate: 'Feil: Du overskredet maksimalt antall meldinger per minutt.',
	errorConnectionTimeout: 'Feil: Oppkoblingstid utgått. Forsøk forsøk igjen.',
	errorConnectionStatus: 'Feil: Oppkoblingsstatus: %s',
	errorDOMSyntax: 'Feil: Ugyldig DOM Syntaks (DOM ID: %s).'

}
