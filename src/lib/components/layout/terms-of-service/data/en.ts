import { document, section, text } from '$lib/components/layout/terms-of-service/utils';
import { EMAIL_ADDRESS, TELEGRAM_USERNAME } from '$lib/constants';

export const enData = document('Terms of service', 'for software development services', [
	text(
		'These Terms set out the general terms under which Ivan Sarnitskii, an individual entrepreneur registered under the laws of Georgia (the “Contractor”), provides software development services. They apply to each Order together with the Order-Specific Terms and are binding on the person who accepts them (the “Client”).',
		null,
	),
	section('General provisions', [
		text(
			'“Order” means a specific project or task. “Order-Specific Terms” means the terms of an Order agreed by the parties in any form that allows their content to be confirmed (correspondence, specification, proposal, or invoice). “Deliverables” means whatever the Contractor creates in the course of an Order.',
		),
		text(
			'These Terms are deemed accepted when the Client pays for an Order (in full or in part) or confirms the Order-Specific Terms or the start of work.',
		),
		text(
			'The Contractor is an independent contractor. These Terms do not create an employment, partnership, or agency relationship.',
		),
		text(
			'The scope of work, deadlines, price, payment and acceptance procedures, delivery of the Deliverables and source code, rights to the Deliverables, and other material matters are determined by the Order-Specific Terms. In case of conflict, the Order-Specific Terms prevail over these Terms. Any matter not addressed by either is governed by the laws of Georgia.',
		),
	]),
	section('Work and payment', [
		text('The Contractor may decline an Order before the Order-Specific Terms are agreed.'),
		text(
			'The Client will promptly provide materials, access, and feedback. Deadlines are extended accordingly for any delay caused by the Client.',
		),
		text(
			'Estimates of time and cost are approximate unless the Order-Specific Terms provide otherwise. Work beyond the agreed scope will be performed and paid for under a separate agreement.',
		),
		text(
			'Unless otherwise agreed, the Client bears bank fees and currency conversion costs. Unless otherwise agreed, the Client also bears the cost of hosting, domains, licenses, and third-party services.',
		),
		text(
			'The Contractor may engage subcontractors and remains responsible to the Client for their work.',
		),
		text('If a payment is late, the Contractor may suspend work until it is received.'),
	]),
	section('Acceptance and support', [
		text(
			'The acceptance procedure and review period are determined by the Order-Specific Terms. If they are not specified, the Client will review the Deliverables within 7 days after delivery and notify the Contractor in writing of any failure to conform to the agreed task. If no objection is received within that period, the Deliverables are deemed accepted.',
		),
		text(
			'The Contractor will correct any failure of the Deliverables to conform to the agreed task within a reasonable time.',
		),
		text(
			'Ongoing support and further development of the Deliverables are provided under separate terms unless the Order-Specific Terms provide otherwise.',
		),
	]),
	section('Rights to deliverables', [
		text(
			'Rights to the Deliverables, including delivery of source code, are determined by the Order-Specific Terms. If they are not specified, the intellectual property rights in Deliverables created specifically for the Client transfer to the Client upon full payment for the Order.',
		),
		text(
			'Until full payment is received, the Client may use the Deliverables only with the Contractor’s written permission.',
		),
		text(
			'Rights in materials the Contractor created before the Order or not specifically for the Client, and in third-party components, remain with their respective owners. The Client may use such materials as part of the Deliverables.',
		),
		text(
			'The Client represents and warrants that it has the right to use the materials it provides, and will indemnify the Contractor against losses arising from third-party claims relating to those materials.',
		),
		text(
			'The Contractor may identify the Client as a customer and display the Deliverables in its portfolio unless the parties agree otherwise.',
		),
	]),
	section('Confidentiality', [
		text(
			'The Contractor will not disclose to third parties any confidential information of the Client received in the course of an Order, except where disclosure is required by law. Additional terms may be agreed separately (NDA).',
			null,
		),
	]),
	section('Liability', [
		text(
			'The Contractor is not liable for failures caused by the actions of the Client or third parties, or by third-party services, hosting, or infrastructure.',
		),
		text('The Contractor does not guarantee any commercial or other economic result.'),
		text(
			'To the extent permitted by law, the Contractor’s total liability is limited to the amount paid by the Client for the relevant Order and excludes lost profits and indirect or consequential damages.',
		),
		text(
			'Neither party is liable for failure or delay in performance caused by circumstances beyond its reasonable control. This does not relieve the Client of the obligation to pay for work performed.',
		),
	]),
	section('Termination', [
		text(
			'Either party may terminate an Order by written notice. The Client will pay for work performed and expenses incurred, as well as any other amounts provided for in the Order-Specific Terms.',
		),
		text(
			'The Contractor may terminate an Order if the Client breaches the terms of the Order and fails to cure the breach within a reasonable time after notice.',
		),
	]),
	section('Miscellaneous', [
		text(
			'Email and messaging app correspondence satisfies any requirement under these Terms or an Order that a notice, confirmation, or agreement be in writing.',
		),
		text(
			'The Contractor may amend these Terms. Orders already accepted remain subject to the version in effect at the time of acceptance.',
		),
		text(
			'The parties’ relationship is governed by the laws of Georgia. The parties will seek to resolve any dispute through negotiation. Any dispute not resolved through negotiation will be heard by the Tbilisi City Court, unless mandatory provisions of applicable law require otherwise.',
		),
		text(
			'If any part of these Terms is held invalid, the remaining provisions remain in effect. These Terms, together with the Order-Specific Terms, constitute the entire agreement between the parties regarding the Order.',
		),
	]),
	section('Contractor details', [
		text('Individual entrepreneur Ivan Sarnitskii', null),
		text('300480717', 'Identification number:'),
		text(
			'Georgia, Tbilisi, Gldani District, II Dead End of Teimuraz Bochorishvili, Building 5, Apartment 152',
			'Legal address:',
		),
		text(EMAIL_ADDRESS, 'Email:'),
		text(TELEGRAM_USERNAME, 'Telegram:'),
	]),
]);
