import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function AccordionContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map((data) => (
					<Accordion.Item key={data.id}>
						<Accordion.Header>{data.header}</Accordion.Header>
						<Accordion.Body>{data.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>
			<OptForm>
				<OptForm.Input placeholder="Email Address" />
				<OptForm.Button>Try it out now.</OptForm.Button>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
}
