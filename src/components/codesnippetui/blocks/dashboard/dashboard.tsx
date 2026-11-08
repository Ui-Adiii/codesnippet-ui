import Content from "./content";
import Layout from "./layout";

export default function Dashboard() {
    return (
        <div data-theme="dark" className="overflow-x-hidden">
            <Layout>
                <Content />
            </Layout>
        </div>
    );
}
