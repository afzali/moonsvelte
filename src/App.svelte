<script>
	import Theme from "./Theme.svelte";
	import Page from "./Page.svelte";
	import NavBar from "./NavBar.svelte";
	import NavBarContent from "./NavBarContent.svelte";
	import Icon from "./Icon.svelte";
	import Button from "./Button.svelte";
	import A from "./A.svelte";
	import SideBar from "./SideBar.svelte";
	import SideBarMenu from "./SideBarMenu.svelte";
	import SideBarContent from "./SideBarContent.svelte";
	import SideBarTitle from "./SideBarTitle.svelte";
	import SideBarDivider from "./SideBarDivider.svelte";
	import SideBarLink from "./SideBarLink.svelte";
	import ContentWrapper from "./ContentWrapper.svelte";
	import Container from "./Container.svelte";
	import Row from "./Row.svelte";
	import Col from "./Col.svelte";
	import Content from "./Content.svelte";
	import ContentTitle from "./ContentTitle.svelte";
	import FakeContent from "./FakeContent.svelte";
	import Card from "./Card.svelte";
	import CardTitle from "./CardTitle.svelte";
	import KBD from "./KBD.svelte";
	import Img from "./Img.svelte";
	import Input from "./Input.svelte";
	import Select from "./Select.svelte";
	import Textarea from "./Textarea.svelte";
	import Checkbox from "./Checkbox.svelte";
	import Radio from "./Radio.svelte";
	import Switch from "./Switch.svelte";
	import File from "./File.svelte";
	import InputGroup from "./InputGroup.svelte";
	import PrependInput from "./PrependInput.svelte";
	import AppendInput from "./AppendInput.svelte";
	import Alert from "./Alert.svelte";
	import BadgesGroup from "./BadgesGroup.svelte";
	import Badges from "./Badges.svelte";
	import BreadCrumb from "./BreadCrumb.svelte";
	import BreadCrumbItem from "./BreadCrumbItem.svelte";
	import DropDown from "./DropDown.svelte";
	import DropDownButton from "./DropDownButton.svelte";
	import DropDownMenu from "./DropDownMenu.svelte";
	import DropDownHeader from "./DropDownHeader.svelte";
	import DropDownItem from "./DropDownItem.svelte";
	import DropDownDivider from "./DropDownDivider.svelte";
	import DropDownContent from "./DropDownContent.svelte";
	import ButtonGroup from "./ButtonGroup.svelte";
	import Collapse from "./Collapse.svelte";
	import CollapseHeader from "./CollapseHeader.svelte";
	import CollapseContent from "./CollapseContent.svelte";
	import Modal from "./Modal.svelte";
	import ModalContent from "./ModalContent.svelte";
	import Progress from "./Progress.svelte";
	import ProgressBar from "./ProgressBar.svelte";
	import ProgressBarGroup from "./ProgressBarGroup.svelte";
	import Table from "./Table.svelte";
	import THead from "./THead.svelte";
	import TH from "./TH.svelte";
	import TR from "./TR.svelte";
	import TBody from "./TBody.svelte";
	import TD from "./TD.svelte";
	import Pagination from "./Pagination.svelte";
	import PaginationItem from "./PaginationItem.svelte";
	import Toast from "./Toast";
	import Form from "./Form.svelte";
	import FormGroup from "./FormGroup.svelte";
	import Label from "./Label.svelte";
import NavBarBrand from "./NavBarBrand.svelte";
import NavBarNav from "./NavBarNav.svelte";
import NavItem from "./NavItem.svelte";
import NavBarText from "./NavBarText.svelte";

	let dark = true;
	let hideSideBarDefault = false;

	// function toggleSideBar(){
	// 	let pageWrapper = document.getElementsByClassName("page-wrapper")[0];
	// 	if (pageWrapper) {
	//         if (pageWrapper.getAttribute("data-sidebar-hidden")) {
	//             pageWrapper.removeAttribute("data-sidebar-hidden");
	//         } else {
	//             pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
	//         }
	//     }
	// }
</script>

<Theme type={dark ? 'dark' : 'light'} />

<Page
	navbar
	fixBottom
	sidebar
	bind:sideBarHidden={hideSideBarDefault}
	transition>
	<NavBar>
		<NavBarContent>
			<Button
				on:click={(e) => (hideSideBarDefault = !hideSideBarDefault)}>
				<Icon name="bars" />
			</Button>
		</NavBarContent>
		<NavBarContent>
			<NavBarBrand klass="ml-10 ml-sm-20">
				<Img
					src="https://www.gethalfmoon.com/static/site/img/fake-logo.svg"
					alt="fake-logo" />
				<span class="d-none d-sm-flex">Brand</span>
			</NavBarBrand>
		</NavBarContent>
		<NavBarContent klass="ml-auto">
			<Button on:click={(e) => (dark = !dark)}>
				<Icon name="moon-o" />
			</Button>
			<A primary>Get started</A>
		</NavBarContent>
	</NavBar>
	<SideBar>
		<SideBarMenu>
			<SideBarContent>
				<Input placeholder="Search" />
				<div class="mt-10 font-size-12">
					Press
					<KBD>/</KBD>
					to focus
				</div>
			</SideBarContent>
			<SideBarTitle>Getting started</SideBarTitle>
			<SideBarDivider />
			<SideBarLink icon="code" active>Installition</SideBarLink>
			<SideBarLink icon="terminal">CLI commands</SideBarLink>
			<br />
			<SideBarTitle>Components</SideBarTitle>
			<SideBarDivider />
			<SideBarLink icon="folder-open-o">File explorer</SideBarLink>
			<SideBarLink icon="table">Spreadsheet</SideBarLink>
			<SideBarLink icon="map-o">Map</SideBarLink>
			<SideBarLink icon="commenting-o">Messenger</SideBarLink>
		</SideBarMenu>
	</SideBar>
	<ContentWrapper>
		<Container fluid>
			<Row spacelarge>
				<Col type="lg-9">
					<Content>
						<BreadCrumb right>
							<BreadCrumbItem>
								<A hyperlink href="#/">Home</A>
							</BreadCrumbItem>
							<BreadCrumbItem active>Dashboard</BreadCrumbItem>
						</BreadCrumb>
						<ContentTitle>Page title</ContentTitle>
						<FakeContent />
						<FakeContent />
						<Progress>
							<ProgressBar percent="20" />
							<ProgressBar percent="20" success />
							<ProgressBar percent="20" danger />
							<ProgressBar percent="20" secondary />
						</Progress>
						<Progress klass="h-25 mt-10">
							<ProgressBar showpercent percent="75" animated />
						</Progress>
						<ProgressBarGroup klass="mt-10">
							<Progress>
								<ProgressBar percent="100" success />
							</Progress>
							<span slot="label">
								<Icon
									name="check-circle"
									klass="text-success font-size-16" />
							</span>
						</ProgressBarGroup>
						<Select
							multiple
							id="test"
							label="Select one or more colors">
							<option value="red">Red</option>
							<option value="blue">Blue</option>
							<option value="yellow">Yellow</option>
						</Select>
						<DropDown klass="mt-10 mb-10" arrow right>
							<DropDownButton right>Drop Down</DropDownButton>
							<DropDownMenu>
								<DropDownHeader>Header</DropDownHeader>
								<DropDownItem href="#/">link 1</DropDownItem>
								<DropDownItem href="#/">link 2</DropDownItem>
								<DropDownDivider />
								<DropDownContent>
									<Button primary>login</Button>
								</DropDownContent>
							</DropDownMenu>
						</DropDown>
						<DropDown klass="mt-10 mb-10" arrow>
							<DropDownButton custom>
								<Button primary tooltip="Login From Here!">
									Sign in
									<Icon name="angle-down" klass="ml-5" />
								</Button>
							</DropDownButton>
							<DropDownMenu>
								<DropDownContent>
									<Form>
										<FormGroup>
											<Label
												name="username"
												required>Username</Label>
											<Input
												id="username"
												placeholder="Username"
												required />
										</FormGroup>
										<FormGroup>
											<Label
												name="password"
												required>Password</Label>
											<Input
												type="password"
												id="password"
												placeholder="Password"
												required />
										</FormGroup>
										<Input
											klass="btn btn-primary btn-block"
											type="submit"
											value="Sign in" />
										<div class="text-center mt-10">
											<A
												href="#/"
												tooltip="Forget or signup"
												hyperlink>Forgot password?</A>
										</div>
									</Form>
								</DropDownContent>
							</DropDownMenu>
						</DropDown>
						<Textarea placeholder="some text here" />

						<Checkbox checked klass="mt-10 mb-10">salam</Checkbox>

						<Radio
							value="Radio_1"
							klass="d-inline-block mr-10"
							name="test">
							Radio One
						</Radio>
						<Radio
							value="Radio_2"
							klass="d-inline-block mr-10"
							name="test"
							checked>
							Radio Two
						</Radio>

						<Switch checked klass="mt-10 mb-10">
							Are you agree?
						</Switch>

						<File error="please upload valid file!">
							Upload your file
						</File>
						<ButtonGroup
							toolbar
							klass="mt-10 p-5 bg-light-lm bg-very-dark-dm rounded">
							<ButtonGroup>
								<Button square>1</Button>
								<Button square>2</Button>
							</ButtonGroup>
							<InputGroup klass="ml-auto">
								<PrependInput>$</PrependInput>
								<Input placeholder="Price search" alternative />
							</InputGroup>
						</ButtonGroup>

						<Collapse klass="mt-10" open>
							<CollapseHeader noicon>
								<span
									class="hidden-collapse-open text-muted">&plus;</span>
								<span
									class="hidden-collapse-closed text-muted">&minus;</span>
								<span class="ml-5">Did Rohan come to Gondor's
									aid?</span>
							</CollapseHeader>
							<CollapseContent>
								Computers are important because they are like
								bicycles for the mind.
							</CollapseContent>
						</Collapse>
						<Collapse klass="mb-10">
							<CollapseHeader>
								<strong>Plain White T-Shirt</strong>
								<br />
								<span class="text-muted">Price: $20.00</span>
							</CollapseHeader>
							<CollapseContent>
								A long description that lists all the good sides
								of the product and none of the bad. Compels the
								shopper to add this product to their cart
								immediately.
							</CollapseContent>
						</Collapse>
						<InputGroup>
							<PrependInput>@</PrependInput>
							<Input placeholder="Email" />
							<AppendInput type="button">
								<Button primary>Save</Button>
							</AppendInput>
							<AppendInput type="button">
								<Button danger>Reset</Button>
							</AppendInput>
						</InputGroup>
						<InputGroup>
							<Input placeholder="Your domain" />
							<AppendInput>.aut.ac.ir</AppendInput>
						</InputGroup>
						<InputGroup large>
							<PrependInput type="select">
								<Select large>
									<option value="red">Red</option>
									<option value="blue">Blue</option>
									<option value="yellow">Yellow</option>
								</Select>
							</PrependInput>
							<Input placeholder="Your Theme Color" />
							<AppendInput>
								<Checkbox blank checked />
							</AppendInput>
						</InputGroup>
						<Alert primary klass="mt-10" filled close>
							<h4 slot="heading">Alert New</h4>
							this is simple alert for test
							<A
								alertLink
								hyperlink
								tooltipposition="right"
								tooltip="Tooltip for A">
								and Link it!
							</A>
						</Alert>
						<Alert danger klass="mt-10">
							<h4 slot="heading">Heads up!</h4>
							<p>You are about to do something important.</p>
							<div class="mb-10">
								<Input value="john@example.com" alternative />
							</div>
							<div class="mb-10 text-right">
								<Button alternative>Let's do it!</Button>
							</div>
						</Alert>
						<BadgesGroup klass="mt-10">
							<Badges>Default</Badges>
							<Badges primary>Primary</Badges>
							<Badges danger>Danger</Badges>
						</BadgesGroup>
					</Content>
					<Card>
						<CardTitle>Card title</CardTitle>
						<FakeContent />
						<FakeContent />
						<FakeContent />
						<Button
							primary
							small
							on:click={(e) => Toast.creat({
									content: "This is a default alert with <a href='#' class='alert-link'>a link</a> being toasted.", 
									title: 'Another alert - '+ Math.round(Math.random()*10).toString(),
									alertType: ['alert-success', 'alert-primary', 'alert-secondary', 'alert-danger'][Math.round(Math.random()*3)],
									fillType: (Math.random()*10 > 5) ? 'filled' : '',
									hasDismissButton: true, 
									timeShown: 1000*(Math.round(Math.random()*5))+1000,
								})}>
							Random Toast
						</Button>
						<A secondary small href="#alert">Modal</A>
					</Card>
					<Content>
						<FakeContent />
						<FakeContent klass="w-150" />
					</Content>
				</Col>
				<Col type="lg-3" klass="d-none d-lg-block">
					<Content>
						<ContentTitle>On this page</ContentTitle>
						<FakeContent />
						<FakeContent />
						<FakeContent />
						<FakeContent />
						<FakeContent />
					</Content>
				</Col>
				<Col>
					<Content>
						<Table hover>
							<THead>
								<TR>
									<TH>#</TH>
									<TH>Row type</TH>
									<TH>Heading</TH>
								</TR>
							</THead>
							<TBody>
								<TR>
									<TH>1</TH>
									<TD>Default</TD>
									<TD>Cell</TD>
								</TR>
								<TR primary>
									<TH>2</TH>
									<TD>Primary</TD>
									<TD>Cell</TD>
								</TR>
								<TR success>
									<TH>3</TH>
									<TD>Success</TD>
									<TD>Cell</TD>
								</TR>
								<TR secondary>
									<TH>4</TH>
									<TD>Secondary</TD>
									<TD>Cell</TD>
								</TR>
								<TR danger>
									<TH>5</TH>
									<TD>Danger</TD>
									<TD>Cell</TD>
								</TR>
							</TBody>
						</Table>
						<Pagination klass="mt-20">
							<PaginationItem custom>
								<A href="#/" pagelink>
									<Icon name="angle-left" />
									<span class="sr-only">Previous</span>
								</A>
							</PaginationItem>
							<PaginationItem active>1</PaginationItem>
							<PaginationItem ellipsis />
							<PaginationItem href="#/">10</PaginationItem>
							<PaginationItem custom>
								<A href="#/" pagelink>
									<Icon name="angle-right" />
									<span class="sr-only">Next</span>
								</A>
							</PaginationItem>
						</Pagination>
					</Content>
				</Col>
			</Row>
		</Container>
	</ContentWrapper>
	<NavBar bottom>
		<NavBarNav klass="ml-auto">
			<NavItem><Icon name="question-circle-o" klass="mr-5" />Help</NavItem>
		</NavBarNav>
		<NavBarText>&copy; Copyright 2020, Brand</NavBarText>
	</NavBar>
</Page>

<Modal name="alert">
	<ModalContent title="Modal title">
		<p>
			This is the modal content. Almost any type of content can be
			presented to the user here.
		</p>
		<div class="text-right mt-20">
			<A href="#/" klass="mr-5">Close</A>
			<A href="#/" primary>I understand</A>
		</div>
	</ModalContent>
</Modal>
