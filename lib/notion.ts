import { Client } from "@notionhq/client";

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface Project {
  id: string;
  title: string;
  description: string;
  demoUrl: string | null;
  github: string | null;
  tags: string[];
  image: string | null;
}

export async function getProjects(): Promise<Project[]> {
  try {
    // Validate environment variables
    if (!process.env.NOTION_TOKEN) {
      console.error("NOTION_TOKEN is missing");
      return [];
    }
    
    if (!process.env.NOTION_DATABASE_ID) {
      console.error("NOTION_DATABASE_ID is missing");
      return [];
    }

    const response = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
    });

    const projects = response.results
      .map((page: any) => {
        // Check if page has properties
        if (!page.properties) {
          console.warn(`Page ${page.id} missing properties`);
          return null;
        }

        const props = page.properties;

        return {
          id: page.id,

          title: props.Title?.title?.[0]?.plain_text || "Untitled Project",

          description: props.Description?.rich_text?.[0]?.plain_text || "",

          demoUrl: props.DemoURL?.url || null,

          github: props.GitHub?.url || null,

          tags: props.Tags?.multi_select?.map((t: any) => t.name) || [],

          image:
            props.Image?.files?.[0]?.file?.url ||
            props.Image?.files?.[0]?.external?.url ||
            null,
        };
      })
      .filter((project): project is Project => project !== null);

    return projects;
  } catch (error) {
    console.error("Error fetching projects from Notion:", error);
    
    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    
    return [];
  }
}