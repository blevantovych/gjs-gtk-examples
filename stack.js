#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_page_clicked(widget)
{
    stack.set_visible_child_name(widget.page);
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Stack");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var stack = new Gtk.Stack();
stack.set_vexpand(true);
stack.set_hexpand(true);
grid.attach(stack, 0, 0, 6, 1);

var i;

for (i = 1; i < 6; i++)
{
    var name = i.toString();

    var label = new Gtk.Label({label: "Page " + name});
    stack.add_named(label, name);

    var button = new Gtk.Button({label: "Page " + name});
    button.page = name
    button.connect("clicked", function() {on_page_clicked(button)});
    grid.attach(button, i, 1, 1, 1);
}

window.show_all();

Gtk.main();
