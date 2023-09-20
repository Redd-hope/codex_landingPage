// "use client";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import React from "react";
// // import EventForm from "@/components/forms/EventForm";
// import EventTable from "@/components/dashboard/EventTable";

// const EventHorizontalTabs = () => {
//     return (
//         <div className="flex flex-col  min-h-[100vh] ">
//             <Tabs defaultValue="account" className="flex-grow">
//                 <TabsList className="bg-gray-300 text-black p-4">
//                     <TabsTrigger
//                         value="create_event"
//                         className="cursor-pointer p-2"
//                     >
//                         Create Blog
//                     </TabsTrigger>
//                     <TabsTrigger
//                         value="edit_event"
//                         className="cursor-pointer p-2"
//                     >
//                         Get All Blog
//                     </TabsTrigger>
//                 </TabsList>
//                 <div className="flex-grow bg-white p-4 overflow-y-auto">
//                     <TabsContent value="create_event">
//                         <div>
//                             <h1 className="text-3xl font-bold">Create Blog</h1>
//                             <div className="content">
//                                 <BlogForm />
//                             </div>
//                         </div>
//                     </TabsContent>
//                     <TabsContent value="edit_event">
//                         <div>
//                             <h1 className="text-3xl font-bold">Edit Blog</h1>
//                             <div>
//                                 <EventTable />
//                             </div>
//                         </div>
//                     </TabsContent>
//                 </div>
//             </Tabs>
//         </div>
//     );
// };

// export default EventHorizontalTabs;
