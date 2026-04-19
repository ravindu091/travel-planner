import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function newTrip() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <Card className="w-auto">
        <CardHeader>New Trip</CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Japan Trip"
                className={cn(
                  "w-full border border-gray-300 px-3 py-2",
                  "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                )}
                required
              />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Description....."
                className={cn(
                  "w-full border border-gray-300 px-3 py-2",
                  "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                )}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate "
                  className="border w-full border-gray-300 rounded-md py-2 px-2 font-serif"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate "
                  className="border w-full border-gray-300 rounded-md py-2 px-2 font-serif"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Create Trip</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
