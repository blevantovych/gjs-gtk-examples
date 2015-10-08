#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("StackSwitcher");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let stack = new Gtk.Stack();
stack.set_vexpand(true);
stack.set_hexpand(true);
grid.attach(stack, 0, 1, 1, 1);

let stackswitcher = new Gtk.StackSwitcher();
stackswitcher.set_stack(stack);
grid.attach(stackswitcher, 0, 0, 1, 1);

var i;

for (i = 1; i < 6; i++)
{
    var name = i.toString();
    var title = "Page " + name;

    let label = new Gtk.Label({label: title});
    stack.add_titled(label, name, title);
}

window.show_all();

Gtk.main();
