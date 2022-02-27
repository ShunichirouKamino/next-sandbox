import { Provider, createClient, Client } from "urql";

const client: Client = createClient({
  url: "https://graphql.fauna.com/graphql",
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESSTOKEN}`,
    },
  },
});

const ProviderClient: React.FC = ({ children }): JSX.Element => {
  console.log("url: " + client.url);
  return (
    <>
      <Provider value={client}>{children}</Provider>
    </>
  );
};

export default ProviderClient;
