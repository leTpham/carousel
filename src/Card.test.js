import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={3} />);
});

it("has the correct caption & src", function () {
  const { container, debug } = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={3} />);

  const img = container.querySelector("img");
  debug(img);

  expect(img.getAttribute("alt")).toEqual("testing image 1");
  expect(img.getAttribute("src")).toContain("test1.com");
  expect(img.getAttribute("class")).toContain("Card-image");
});

it("matches snapshot", function () {
  const { container } = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={3} />);
  expect(container).toMatchSnapshot();
});