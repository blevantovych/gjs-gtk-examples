#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_show_heading_toggled(checkbutton)
{
    var active = checkbutton.get_active();
    calendar.set_property("show-heading", active);
}

function on_show_day_names_toggled(checkbutton)
{
    var active = checkbutton.get_active();
    calendar.set_property("show-day-names", active);
}

function on_prevent_change_toggled(checkbutton)
{
    var active = checkbutton.get_active();
    calendar.set_property("no-month-change", active);
}

function on_show_weeks_toggled(checkbutton)
{
    var active = checkbutton.get_active();
    calendar.set_property("show-week-numbers", active);
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Calendar");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let calendar = new Gtk.Calendar();
grid.attach(calendar, 0, 0, 1, 1);

let box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});
grid.attach(box, 1, 0, 1, 1);

let checkbuttonShowHeading = new Gtk.CheckButton({label: "Show Heading"});
checkbuttonShowHeading.set_active(true);
checkbuttonShowHeading.connect("toggled", function() {on_show_heading_toggled(checkbuttonShowHeading)});
box.pack_start(checkbuttonShowHeading, false, false, 0);

let checkbuttonDayNames = new Gtk.CheckButton({label: "Show Day Names"});
checkbuttonDayNames.set_active(true);
checkbuttonDayNames.connect("toggled", function() {on_show_day_names_toggled(checkbuttonDayNames)});
box.pack_start(checkbuttonDayNames, false, false, 0);

let checkbuttonPreventChange = new Gtk.CheckButton({label: "Prevent Month/Year Changes"});
checkbuttonPreventChange.connect("toggled", function() {on_prevent_change_toggled(checkbuttonPreventChange)});
box.pack_start(checkbuttonPreventChange, false, false, 0);

let checkbuttonShowWeeks = new Gtk.CheckButton({label: "Show Weeks"});
checkbuttonShowWeeks.connect("toggled", function() {on_show_weeks_toggled(checkbuttonShowWeeks)});
box.pack_start(checkbuttonShowWeeks, false, false, 0);

window.show_all();

Gtk.main();
