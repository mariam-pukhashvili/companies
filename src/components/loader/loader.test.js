import { render } from "@testing-library/react";

import Loader from "./Loader";

describe("loader component test", () => {
	test("component renders correctly", () => {
		const component = render(<Loader />);
	});
});
