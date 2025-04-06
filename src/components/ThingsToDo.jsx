import ActivityCard from "./ActivityCard";

const activities = [
    {
        title: "Hiking in Quba",
        image: "/assets/activities/hiking.jpg",
        description: "Enjoy the scenic trails and lush forests of northern Azerbaijan.",
    },
    {
        title: "Caspian Sea Cruise",
        image: "/assets/activities/boat.jpg",
        description: "Relax on a boat tour across the Caspian coast of Baku.",
    },
    {
        title: "Gobustan Petroglyphs",
        image: "/assets/activities/gobustan.jpg",
        description: "Explore ancient rock carvings and mud volcanoes.",
    },
    {
        title: "Tea Culture in Sheki",
        image: "/assets/activities/tea.jpg",
        description: "Experience traditional Azerbaijani tea with local sweets.",
    },
];

const ThingsToDo = () => {
    return (
        <section className="py-12 bg-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Top Things To Do
            </h2>
            <div className="flex flex-wrap justify-center gap-x-40 gap-y-20 px-4">
                {activities.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                ))}
            </div>
        </section>
    );
};

export default ThingsToDo;
