#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("FlowBox");
window.connect("destroy", Gtk.main_quit);

let flowbox = new Gtk.FlowBox();
window.add(flowbox);

for (var count = 1; count < 10; count++)
{
    let label = new Gtk.Label({label: "Label " + count});
    flowbox.insert(label, count);
}

window.show_all();

Gtk.main();
