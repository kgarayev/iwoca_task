import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Applications from "./Applications";

describe("Applications", () => {
  // checking the loading state
  test("displays loading state initially", async () => {
    render(<Applications />);

    // checking for "loading" indicator
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    // waiting for loading not to be in the document
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });
  });

  // initial render of data (page 1 data)
  //  this is a very crude and simple way to test it - I have used Postman to test the endpoint and to undertand what data will be returned
  // then manually insert this data here to test as a check that api data is being fetched and rendered
  //   in reality, a fully fledged mocking would be walkUpBindingElementsAndPatterns, but I want to concentrate on the task more than testing due to limited time
  test("renders applications from page 1", async () => {
    render(<Applications />);
    const firstPageCompany = await screen.findByText(
      /Kulas, Renner and Dietrich/i
    );
    expect(firstPageCompany).toBeInTheDocument();
  });

  // testing pagination functionality (page 2 data)
  test("loads and renders applications from page 2 on pagination", async () => {
    render(<Applications />);

    // wait for the loading to finish and the "Load More" button to come up
    const loadMoreButton = await waitFor(
      () => screen.getByRole("button", { name: /Load more/i }),
      { timeout: 5000 }
    );

    fireEvent.click(loadMoreButton);

    // subsequent render of data (page 2 data)
    //  this is a very crude and simple way to test it - I have used Postman to test the endpoint and to undertand what data will be returned
    // then manually insert this data here to test as a check that api data is being fetched and rendered
    //   in reality, a fully fledged mocking would be walkUpBindingElementsAndPatterns, but I want to concentrate on the task more than testing due to limited time
    const secondPageCompany = await waitFor(
      () => screen.findByText(/Fahey - Rippin/i),
      { timeout: 5000 }
    );
    expect(secondPageCompany).toBeInTheDocument();
  });
});
